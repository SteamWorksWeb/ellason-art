import type { Block, CollectionConfig } from 'payload';

export const HeroBlock: Block = {
  slug: 'heroBlock',
  fields: [
    { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
    { name: 'kicker', type: 'text', defaultValue: 'Ellason Fine Art' },
    { name: 'headline', type: 'richText' },
    { name: 'primaryButtonText', type: 'text', defaultValue: 'Shop Collection' },
    { name: 'primaryButtonLink', type: 'text', defaultValue: '/shop' },
    { name: 'secondaryButtonText', type: 'text', defaultValue: 'Request a Commission' },
    { name: 'secondaryButtonLink', type: 'text', defaultValue: '/commissions' },
  ]
}

export const BrandStatementBlock: Block = {
  slug: 'brandStatementBlock',
  fields: [
    { name: 'quote', type: 'text', defaultValue: 'Art that breathes life into a room...' },
    { name: 'description', type: 'text', defaultValue: 'Every piece is created to bridge the gap...' }
  ]
}

export const FeaturedWorksBlock: Block = {
  slug: 'featuredWorksBlock',
  fields: [
    { name: 'kicker', type: 'text', defaultValue: 'Curated Collection' },
    { name: 'viewAllLink', type: 'text', defaultValue: '/shop' },
    {
      name: 'works',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'size', type: 'text' },
        { name: 'imageSrc', type: 'upload', relationTo: 'media' },
      ]
    }
  ]
}

export const AboutPreviewBlock: Block = {
  slug: 'aboutPreviewBlock',
  fields: [
    { name: 'kicker', type: 'text', defaultValue: 'The Artist' },
    { name: 'headline', type: 'text', defaultValue: 'Crafting Serenity through Texture' },
    { name: 'description', type: 'text', defaultValue: 'Based on the coastline, the studio is a sanctuary...' },
    { name: 'buttonText', type: 'text', defaultValue: 'Read the Full Story' },
    { name: 'buttonLink', type: 'text', defaultValue: '/about' },
    { name: 'imageSrc', type: 'upload', relationTo: 'media' }
  ]
}

export const CommissionsBlock: Block = {
  slug: 'commissionsBlock',
  fields: [
    { name: 'headline', type: 'text', defaultValue: 'Bespoke Commissions' },
    { name: 'description', type: 'text', defaultValue: 'Looking for a specific dimension or a palette...' },
    { name: 'buttonText', type: 'text', defaultValue: 'Begin the Process' },
    { name: 'buttonLink', type: 'text', defaultValue: '/commissions' }
  ]
}

export const TrustElementsBlock: Block = {
  slug: 'trustElementsBlock',
  fields: [
    {
      name: 'elements',
      type: 'array',
      fields: [
        { name: 'iconLetter', type: 'text', maxLength: 1 },
        { name: 'title', type: 'text' },
        { name: 'description', type: 'text' }
      ]
    }
  ]
}

export const BioHeroBlock: Block = {
  slug: 'bioHeroBlock',
  fields: [
    { name: 'kicker', type: 'text', defaultValue: 'About the Artist' },
    { name: 'headline', type: 'text', defaultValue: 'The Artist Behind the Canvas' },
    { name: 'description', type: 'text', defaultValue: 'Drawing profound inspiration from the unyielding beauty...' },
    { name: 'imageSrc', type: 'upload', relationTo: 'media' }
  ]
}

export const StoryProseBlock: Block = {
  slug: 'storyProseBlock',
  fields: [
    {
      name: 'sections',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'paragraphs', type: 'array', fields: [{ name: 'text', type: 'text' }] }
      ]
    }
  ]
}

export const StudioGalleryBlock: Block = {
  slug: 'studioGalleryBlock',
  fields: [
    { name: 'kicker', type: 'text', defaultValue: 'Studio Fragments' },
    { name: 'image1Src', type: 'upload', relationTo: 'media' },
    { name: 'image2Src', type: 'upload', relationTo: 'media' },
  ]
}

export const BottomCTABlock: Block = {
  slug: 'bottomCTABlock',
  fields: [
    { name: 'headline', type: 'text', defaultValue: 'Bring the Coast into Your Home' },
    { name: 'description', type: 'text', defaultValue: 'Explore the available curated works...' },
    { name: 'primaryButtonText', type: 'text', defaultValue: 'Shop Collection' },
    { name: 'primaryButtonLink', type: 'text', defaultValue: '/shop' },
    { name: 'secondaryButtonText', type: 'text', defaultValue: 'Start a Commission' },
    { name: 'secondaryButtonLink', type: 'text', defaultValue: '/commissions' },
  ]
}

export const ServiceHeroBlock: Block = {
  slug: 'serviceHeroBlock',
  fields: [
    { name: 'kicker', type: 'text', defaultValue: 'Bespoke Services' },
    { name: 'headline', type: 'text', defaultValue: 'Commission an Original Piece' },
    { name: 'description', type: 'text', defaultValue: 'Collaborate closely to bring your unique vision to life...' },
    { name: 'priceNote', type: 'text', defaultValue: 'Custom works begin at $1,500' },
    { name: 'imageSrc', type: 'upload', relationTo: 'media' }
  ]
}

export const ProcessTimelineBlock: Block = {
  slug: 'processTimelineBlock',
  fields: [
    { name: 'kicker', type: 'text', defaultValue: 'The Process' },
    {
      name: 'steps',
      type: 'array',
      fields: [
        { name: 'num', type: 'text' },
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'text' }
      ]
    }
  ]
}

export const InquiryFormBlock: Block = {
  slug: 'inquiryFormBlock',
  fields: [
    { name: 'faqHeadline', type: 'text', defaultValue: 'Frequently Asked' },
    { name: 'faqDescription', type: 'text', defaultValue: 'Every commission is unique, but the journey follows a shared rhythm...' },
    {
      name: 'faqs',
      type: 'array',
      fields: [
        { name: 'q', type: 'text' },
        { name: 'a', type: 'text' }
      ]
    },
    { name: 'formHeadline', type: 'text', defaultValue: 'Start the Conversation' }
  ]
}

export const PastCommissionsGalleryBlock: Block = {
  slug: 'pastCommissionsGalleryBlock',
  fields: [
    { name: 'kicker', type: 'text', defaultValue: 'Past Commissions' },
    {
      name: 'images',
      type: 'array',
      fields: [
        { name: 'src', type: 'upload', relationTo: 'media' }
      ]
    }
  ]
}

export const ContactFormBlock: Block = {
  slug: 'contactFormBlock',
  fields: [
    { name: 'kicker', type: 'text', defaultValue: 'Studio Location' },
    { name: 'headline', type: 'text', defaultValue: 'Get in Touch' },
    { name: 'description', type: 'text', defaultValue: 'Reach out regarding available pieces, gallery representation...' },
    { name: 'email', type: 'text', defaultValue: 'studio@ellasonart.com' },
    { name: 'phone', type: 'text', defaultValue: '+1 (555) 123-4567' },
    { name: 'hours', type: 'text', defaultValue: 'Monday – Friday, 10am – 5pm EST' },
    { name: 'formHeadline', type: 'text', defaultValue: 'Send a Message' }
  ]
}

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        BrandStatementBlock,
        FeaturedWorksBlock,
        AboutPreviewBlock,
        CommissionsBlock,
        TrustElementsBlock,
        BioHeroBlock,
        StoryProseBlock,
        StudioGalleryBlock,
        BottomCTABlock,
        ServiceHeroBlock,
        ProcessTimelineBlock,
        InquiryFormBlock,
        PastCommissionsGalleryBlock,
        ContactFormBlock
      ]
    }
  ],
};
