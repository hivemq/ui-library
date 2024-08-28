/*
Copyright 2024-present HiveMQ GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

export * from './modules/Shell'
export * from './modules/Content'
export * from './modules/Header'
export * from './modules/Sidebar'
export * from './modules/Buttons'

// TODO make it a hook `useShellContext`
export {
  ShellContext,
  type ShellProviderValue,
} from '@/context/ShellContext'
