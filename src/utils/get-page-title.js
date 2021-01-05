import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Admin Template'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    // 返回pageTitle和title连接后的字符串
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
