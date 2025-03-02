type LinkSection = {
  sectionHeading: string,
  links: {
    icon: string,
    text: string,
    url: string
  }[]
}

type PageContextData = {
  intro: {
    avatar: string,
    heading: string,
    body: {
      shortIntro: string,
      collapsibleIntro: string
    }
    status: string
  },
  linkSections: LinkSection[]
}

export default PageContextData;