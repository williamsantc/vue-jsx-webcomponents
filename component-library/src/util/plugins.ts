import { VueConstructor } from 'vue/types/vue'

interface VueComponents {
    [name: string]: VueConstructor;
}

/**
 * Load a component.
 * @param {object} Vue
 * @param {string} Component name
 * @param {object} Component definition
 */
export const registerComponent = (Vue: VueConstructor, name: string, def: VueConstructor) => {
  if (Vue && name && def) {
    Vue.component(name, def)
  }
}

/**
 * Load a group of components.
 * @param {object} Vue
 * @param {object} Object of component definitions
 */
export const registerComponents = (Vue: VueConstructor, components: VueComponents) => {
  for (const component in components) {
    registerComponent(Vue, component, components[component])
  }
}

// @ts-ignore
export const installFactory = ({ components }: object = {}) => {
  const install = (Vue: VueConstructor) => {
    // @ts-ignore
    if (install.installed) {
      /* istanbul ignore next */
      return
    }
    registerComponents(Vue, components)
    // @ts-ignore
    install.installed = true
  }

  return install
}

/**
 * Plugin object factory function.
 * @param {object} { components, directives, plugins }
 * @returns {object} plugin install object
 */
export const pluginFactory = (options = {}, extend = {}) => ({
  ...extend,
  install: installFactory(options)
})
