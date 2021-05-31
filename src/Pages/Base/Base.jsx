import { useState } from 'react'
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline'

import Menu from './Menu'
import Content from './Content'

const menu = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Team', href: '/team', icon: UsersIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
]

const user = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default function Base(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      
      <Menu 
        menu={menu}
        sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} 
      />

      <Content 
        user={user}
        setSidebarOpen={setSidebarOpen}
      >
          {props.children}
      </Content>

    </div>
  )
}