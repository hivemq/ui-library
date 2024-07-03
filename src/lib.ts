import { Content } from '@/components/Content/Content'
import { Grid } from '@/components/Grid/Grid'
import { Header } from '@/components/Header/Header'
import { HeaderLogo } from '@/components/Header/old/HeaderLogo'
import { HeaderNavigation } from '@/components/Header/old/HeaderNavigation'
import { Sidebar, SidebarNavigation } from '@/components/Sidebar/SidebarNavigation'

import { NavigationProvider as Provider } from '@/context/NavigationContext'

export const UIShell = {
  Content,
  Grid,
  Header,
  HeaderLogo,
  HeaderNavigation,
  Sidebar,
  SidebarNavigation,
  Provider
}
