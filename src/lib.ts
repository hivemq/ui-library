export * from './modules/Shell'
export * from './modules/Content'
export * from './modules/Header'
export * from './modules/Sidebar'

// TODO make it a hook `useShellContext`
export {
  ShellContext,
  type ShellProviderValue,
} from '@/context/ShellContext'
