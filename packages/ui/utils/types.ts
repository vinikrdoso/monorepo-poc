// import { IconNames } from '../components/icon/icon-names'
// import { IVWError } from '@shared/utils/vw-error'
// import { IProps as IPageHeaderProps } from '@shared/components/page-header'

export type BreakPoints = {
  XXS?: number | undefined,
  XS?: number | undefined,
  SM?: number | undefined,
  MD?: number | undefined,
  LG?: number | undefined,
}

export type BreakPointEntries = [[keyof BreakPoints, number]]

export enum HeadingElements {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3'
}

export interface ILink {
  isExternal?: boolean,
  href: string,
  openInNewWindow?: boolean,
  label?: string
}

export interface IImage {
  src: string;
  alt: string;
}

export interface IButton {
  label: string;
  link?: ILink;
  onClick?: () => void;
  isDisabled?: boolean;
  download?: boolean | string;
  appearance?: 'primary' | 'secondary';
  testId?: string;
}

export interface IFaq {
  title: string,
  description: string
}

export interface ITestimonial {
  name: string,
  description: string,
  image: IImage
}

export interface IStep {
  title: string,
  description: string,
  button?: IButton,
  image?: IImage,
  hasAppStoreButtons?: boolean,
  moreContent?: string,
  id?: string,
  link?: string,
}

export interface INews {
  title: string,
  description: string,
  date?: string,
  image?: IImage,
  id?: string,
  link?: string,
  article?: {
    title: string,
    subTitle: string,
    description: Array<string>
  },
  testimonialsSection?: {
    items: Array<ITestimonial>
  },
  messageSection?: {
    // icon: IconNames
    title: string
    description: string
  },
}

export interface IMakelaarsDetails {
  makelaarsItem: {
    link: string,
    meta: {
      title: string,
    },
    summary: {
      title: string,
      description: string,
    },
    // pageHeader: IPageHeaderProps,
    videoSection: Array<{
      youtubeVideoId: string,
      description: string
    }>,
    stepperSection?: {
      title: string,
      description: string,
      steps: Array<IStep>
    },
    processSection?: {
      title: string,
      subTitle: string,
      steps: Array<IStep>
    }
    benefitsSection: {
      title: string,
      benefits: Array<IBenefit>
    },
    toolkitSection?: {
      title: string,
      items: Array<{
        title: string
        description: string
        button: IButton
      }>
    },
    faqSection: {
      title: string,
      items: Array<IFaq>
    },
    customFooterData?: {
      title?: string
    },
    messageSection?: {
      // icon: IconNames
      title: string
      description: string
    },
  }
}

export interface IBenefit {
  title: string,
  description: string,
  // icon: IconNames
}

export interface ITextBlock {
  title?: string,
  description: string
}

export interface IPerson {
  name: string,
  image: IImage
}

export interface IContactPerson {
  name: string;
  company?: string;
  image?: IImage | null;
  phoneNumber?: string;
  email: string;
}

export interface ILogo {
  image: IImage,
  link?: ILink
}

export interface MockResponse<T> {
  data: T
}

export type TApiHandlerWithAuthParams<P> = { idToken: string; } & P

// export type TApiHandler<P, T> = (arg: P) => Promise<T | IVWError>
