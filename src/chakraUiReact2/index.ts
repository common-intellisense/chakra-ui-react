import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function chakraUiReact2() {
  return {
    uiName: '@chakra-ui/react',
    lib: '@chakra-ui/react',
    map: getPropsMap(),
  }
}

export function chakraUiReact2Components() {
  return {
    map: getComponentsMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    isReact: true,
    lib: '@chakra-ui/react',
    // directives: directives.chakraUiReact2,
  }
}
