/// <reference path="typings/index.d.ts" />
import * as React from 'react'

declare module Stardust {
  type InputType = 'color' | 'date' | 'datetime' | 'datetime-local' | 'email' | 'number' | 'range' | 'search' | 'select' | 'password' | 'tel' | 'text' | 'time' | 'url' | 'week'

  type SemanticColor = 'red' | 'orange' | 'yellow' | 'olive' | 'green' | 'teal' | 'blue' | 'violet' | 'purple' | 'pink' | 'brown' | 'grey' | 'black'
  type SemanticRotation = 'clockwise' | 'counterclockwise'
  type SemanticFloatDirection = 'left' | 'right'
  type SemanticSize = 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive'
  type SemanticTextAlignment = 'left' | 'center' |'right' | 'justified'
  type SemanticCountry = 'ad' | 'andorra' | 'ae' | 'united arab emirates' | 'uae' | 'af' | 'afghanistan' | 'ag' | 'antigua' | 'ai' | 'anguilla' | 'al' | 'albania' | 'am' | 'armenia' | 'an' | 'netherlands antilles' | 'ao' | 'angola' | 'ar' | 'argentina' | 'as' | 'american samoa' | 'at' | 'austria' | 'au' | 'australia' | 'aw' | 'aruba' | 'ax' | 'aland islands' | 'az' | 'azerbaijan' | 'ba' | 'bosnia' | 'bb' | 'barbados' | 'bd' | 'bangladesh' | 'be' | 'belgium' | 'bf' | 'burkina faso' | 'bg' | 'bulgaria' | 'bh' | 'bahrain' | 'bi' | 'burundi' | 'bj' | 'benin' | 'bm' | 'bermuda' | 'bn' | 'brunei' | 'bo' | 'bolivia' | 'br' | 'brazil' | 'bs' | 'bahamas' | 'bt' | 'bhutan' | 'bv' | 'bouvet island' | 'bw' | 'botswana' | 'by' | 'belarus' | 'bz' | 'belize' | 'ca' | 'canada' | 'cc' | 'cocos islands' | 'cd' | 'congo' | 'cf' | 'central african republic' | 'cg' | 'congo brazzaville' | 'ch' | 'switzerland' | 'ci' | 'cote divoire' | 'ck' | 'cook islands' | 'cl' | 'chile' | 'cm' | 'cameroon' | 'cn' | 'china' | 'co' | 'colombia' | 'cr' | 'costa rica' | 'cs' | 'serbia' | 'cu' | 'cuba' | 'cv' | 'cape verde' | 'cx' | 'christmas island' | 'cy' | 'cyprus' | 'cz' | 'czech republic' | 'de' | 'germany' | 'dj' | 'djibouti' | 'dk' | 'denmark' | 'dm' | 'dominica' | 'do' | 'dominican republic' | 'dz' | 'algeria' | 'ec' | 'ecuador' | 'ee' | 'estonia' | 'eg' | 'egypt' | 'eh' | 'western sahara' | 'er' | 'eritrea' | 'es' | 'spain' | 'et' | 'ethiopia' | 'eu' | 'european union' | 'fi' | 'finland' | 'fj' | 'fiji' | 'fk' | 'falkland islands' | 'fm' | 'micronesia' | 'fo' | 'faroe islands' | 'fr' | 'france' | 'ga' | 'gabon' | 'gb' | 'united kingdom' | 'gd' | 'grenada' | 'ge' | 'georgia' | 'gf' | 'french guiana' | 'gh' | 'ghana' | 'gi' | 'gibraltar' | 'gl' | 'greenland' | 'gm' | 'gambia' | 'gn' | 'guinea' | 'gp' | 'guadeloupe' | 'gq' | 'equatorial guinea' | 'gr' | 'greece' | 'gs' | 'sandwich islands' | 'gt' | 'guatemala' | 'gu' | 'guam' | 'gw' | 'guinea-bissau' | 'gy' | 'guyana' | 'hk' | 'hong kong' | 'hm' | 'heard island' | 'hn' | 'honduras' | 'hr' | 'croatia' | 'ht' | 'haiti' | 'hu' | 'hungary' | 'id' | 'indonesia' | 'ie' | 'ireland' | 'il' | 'israel' | 'in' | 'india' | 'io' | 'indian ocean territory' | 'iq' | 'iraq' | 'ir' | 'iran' | 'is' | 'iceland' | 'it' | 'italy' | 'jm' | 'jamaica' | 'jo' | 'jordan' | 'jp' | 'japan' | 'ke' | 'kenya' | 'kg' | 'kyrgyzstan' | 'kh' | 'cambodia' | 'ki' | 'kiribati' | 'km' | 'comoros' | 'kn' | 'saint kitts and nevis' | 'kp' | 'north korea' | 'kr' | 'south korea' | 'kw' | 'kuwait' | 'ky' | 'cayman islands' | 'kz' | 'kazakhstan' | 'la' | 'laos' | 'lb' | 'lebanon' | 'lc' | 'saint lucia' | 'li' | 'liechtenstein' | 'lk' | 'sri lanka' | 'lr' | 'liberia' | 'ls' | 'lesotho' | 'lt' | 'lithuania' | 'lu' | 'luxembourg' | 'lv' | 'latvia' | 'ly' | 'libya' | 'ma' | 'morocco' | 'mc' | 'monaco' | 'md' | 'moldova' | 'me' | 'montenegro' | 'mg' | 'madagascar' | 'mh' | 'marshall islands' | 'mk' | 'macedonia' | 'ml' | 'mali' | 'mm' | 'myanmar' | 'burma' | 'mn' | 'mongolia' | 'mo' | 'macau' | 'mp' | 'northern mariana islands' | 'mq' | 'martinique' | 'mr' | 'mauritania' | 'ms' | 'montserrat' | 'mt' | 'malta' | 'mu' | 'mauritius' | 'mv' | 'maldives' | 'mw' | 'malawi' | 'mx' | 'mexico' | 'my' | 'malaysia' | 'mz' | 'mozambique' | 'na' | 'namibia' | 'nc' | 'new caledonia' | 'ne' | 'niger' | 'nf' | 'norfolk island' | 'ng' | 'nigeria' | 'ni' | 'nicaragua' | 'nl' | 'netherlands' | 'no' | 'norway' | 'np' | 'nepal' | 'nr' | 'nauru' | 'nu' | 'niue' | 'nz' | 'new zealand' | 'om' | 'oman' | 'pa' | 'panama' | 'pe' | 'peru' | 'pf' | 'french polynesia' | 'pg' | 'new guinea' | 'ph' | 'philippines' | 'pk' | 'pakistan' | 'pl' | 'poland' | 'pm' | 'saint pierre' | 'pn' | 'pitcairn islands' | 'pr' | 'puerto rico' | 'ps' | 'palestine' | 'pt' | 'portugal' | 'pw' | 'palau' | 'py' | 'paraguay' | 'qa' | 'qatar' | 're' | 'reunion' | 'ro' | 'romania' | 'rs' | 'serbia' | 'ru' | 'russia' | 'rw' | 'rwanda' | 'sa' | 'saudi arabia' | 'sb' | 'solomon islands' | 'sc' | 'seychelles' | 'gb sct' | 'scotland' | 'sd' | 'sudan' | 'se' | 'sweden' | 'sg' | 'singapore' | 'sh' | 'saint helena' | 'si' | 'slovenia' | 'sj' | 'svalbard' | 'jan mayen' | 'sk' | 'slovakia' | 'sl' | 'sierra leone' | 'sm' | 'san marino' | 'sn' | 'senegal' | 'so' | 'somalia' | 'sr' | 'suriname' | 'st' | 'sao tome' | 'sv' | 'el salvador' | 'sy' | 'syria' | 'sz' | 'swaziland' | 'tc' | 'caicos islands' | 'td' | 'chad' | 'tf' | 'french territories' | 'tg' | 'togo' | 'th' | 'thailand' | 'tj' | 'tajikistan' | 'tk' | 'tokelau' | 'tl' | 'timorleste' | 'tm' | 'turkmenistan' | 'tn' | 'tunisia' | 'to' | 'tonga' | 'tr' | 'turkey' | 'tt' | 'trinidad' | 'tv' | 'tuvalu' | 'tw' | 'taiwan' | 'tz' | 'tanzania' | 'ua' | 'ukraine' | 'ug' | 'uganda' | 'um' | 'us minor islands' | 'us' | 'america' | 'united states' | 'uy' | 'uruguay' | 'uz' | 'uzbekistan' | 'va' | 'vatican city' | 'vc' | 'saint vincent' | 've' | 'venezuela' | 'vg' | 'british virgin islands' | 'vi' | 'us virgin islands' | 'vn' | 'vietnam' | 'vu' | 'vanuatu' | 'gb wls' | 'wales' | 'wf' | 'wallis and futuna' | 'ws' | 'samoa' | 'ye' | 'yemen' | 'yt' | 'mayotte' | 'za' | 'south africa' | 'zm' | 'zambia' | 'zw' | 'zimbabwe'

  interface GenericProps {
    // --- Optional ---
    className?: string,
    onClick?: (event: React.SyntheticEvent) => any,
    ref?: (el: Node | React.ReactInstance) => any,
  }

  // ======================================================
  // Elements
  // ======================================================
  // Button
  // ----------------------------------
  interface ButtonProps extends GenericProps {
    // --- Optional ---
    children?: React.ReactNode,
  }
  export class Button extends React.Component<ButtonProps, void> {}

  // Container
  // ----------------------------------
  interface ContainerProps extends GenericProps {
    // --- Optional ---
    children?: React.ReactNode,
    fluid?: boolean,
    text?: boolean,
    /** Describes how the text inside this component should be aligned. */
    textAlign?: SemanticTextAlignment,
  }
  export class Container extends React.Component<ContainerProps, void> {}

  // Divider
  // ----------------------------------
  interface DividerProps extends GenericProps {
    // --- Optional ---
    /** Primary content of the Divider */
    children?: React.ReactNode,
    /** Divider can segment content horizontally */
    horizontal?: boolean,
    /** Divider can segment content vertically */
    vertical?: boolean,
    /** Divider can have it's colours inverted */
    inverted?: boolean,
    /** Divider can be fitted without any space above or below it */
    fitted?: boolean,
    /** Divider can divide content without creating a dividing line */
    hidden?: boolean,
    /** Divider can provide greater margins to divide sections of content */
    section?: boolean,
    /** Divider can clear the content above it */
    clearing?: boolean,
  }
  export class Divider extends React.Component<DividerProps, void> {}

  // Flag
  // ----------------------------------
  interface FlagProps extends GenericProps {
    // --- Required ---
    name: SemanticCountry,
  }
  export class Flag extends React.Component<FlagProps, void> {}

  // Icon
  // ----------------------------------
  interface IconProps extends GenericProps {
    // --- Optional ---
    bordered?: boolean,
    /** Class names for custom styling. */
    className?: string,
    /** Icon can formatted to appear circular */
    circular?: boolean,
    /** Color of the icon. */
    color?: SemanticColor,
    /** Icons can display a smaller corner icon */
    corner?: boolean,
    /** Show that the icon is inactive */
    disabled?: boolean,
    /** Fitted, without space to left or right of Icon. */
    fitted?: boolean,
    /** Icon can flipped */
    flipped?: 'horizontally' | 'vertically'
    /** Formatted to have its colors inverted for contrast */
    inverted?: boolean,
    /** Name of the icon */
    name?: string,
    /** Icon can be formatter as a link */
    link?: boolean,
    /** Icon can be used as a simple loader */
    loading?: boolean,
    /** Icon can rotated */
    rotated?: SemanticRotation,
    /** Size of the icon. */
    size?: SemanticSize,
  }
  export class Icon extends React.Component<IconProps, void> {}

  // Image
  // ----------------------------------
  interface ImageProps extends GenericProps {
    // --- Required ---
    src: string,

    // --- Optional ---
    alt?: string,
  }
  export class Image extends React.Component<ImageProps, void> {}

  // Header
  // ----------------------------------
  interface HeaderComponentProps extends GenericProps {
    // --- Optional ---
    children?: React.ReactNode,
  }
  class HeaderComponent extends React.Component<HeaderComponentProps, void> {}

  interface SubheaderComponentProps extends GenericProps {
    // --- Optional ---
    children?: React.ReactNode,
  }
  class SubheaderComponent extends React.Component<SubheaderComponentProps, void> {}

  export class Header extends React.Component<HeaderComponentProps, void> {
    public static H1: HeaderComponent
    public static H2: HeaderComponent
    public static H3: HeaderComponent
    public static H4: HeaderComponent
    public static H5: HeaderComponent
    public static H6: HeaderComponent
    public static Subheader: SubheaderComponent
  }

  // Input
  // ----------------------------------
  interface InputProps extends GenericProps {
    // --- Optional ---
    name?: string,
    type?: InputType,
  }
  export class Input extends React.Component<InputProps, void> {}

  // ListItem
  // ----------------------------------
  interface ListItemProps extends GenericProps {
    // --- Optional ---
    children?: React.ReactNode,
    className?: string,
    description?: React.ReactNode,
    header?: string,
    icon?: React.ReactNode,
    image?: React.ReactNode,
  }
  export class ListItem extends React.Component<ListItemProps, void> {}

  // List
  // ----------------------------------
  interface ListProps extends GenericProps {
    // --- Optional ---
    children?: React.ReactNode,
  }
  export class List extends React.Component<ListProps, void> {
    public static ListItem: ListItem
  }

  // Loader
  // ----------------------------------
  interface LoaderProps extends GenericProps {
    // --- Optional ---
    active?: boolean,
    children?: React.ReactNode,
    disabled?: boolean,
    indeterminate?: boolean,
    inverted?: boolean,
    inline?: boolean | 'centered',
    size?: SemanticSize,
    text?: React.ReactNode,
  }
  export class Loader extends React.Component<LoaderProps, void> {}

  // Rail
  // ----------------------------------
  interface RailProps extends GenericProps {
    // --- Required ---
    position: SemanticFloatDirection,

    // --- Optional ---
    attached?: boolean,
    children?: React.ReactNode,
    close?: boolean | 'very',
    dividing?: boolean,
    internal?: boolean,
    // TODO(zuko): this should not support 'medium' from SemanticSize
    size?: SemanticSize,
  }
  export class Rail extends React.Component<RailProps, void> {}

  // Segment
  // ----------------------------------
  interface SegmentsProps extends GenericProps {}
  class Segments extends React.Component<SegmentsProps, void> {}

  interface SegmentProps extends GenericProps {
    // --- Optional ---
    heading?: React.ReactNode,
  }
  export class Segment extends React.Component<SegmentProps, void> {
    public static Segments: Segments
  }

  // ======================================================
  // Collections
  // ======================================================
  // Breadcrumb
  // ----------------------------------
  interface BreadcrumbDividerProps extends GenericProps {
    // --- Optional ---
    children?: React.ReactNode,
    icon?: React.ReactNode,
  }
  class BreadcrumbDivider extends React.Component<BreadcrumbDividerProps, void> {}

  interface BreadcrumbSectionProps extends GenericProps {
    // --- Optional ---
    active?: boolean,
    children?: React.ReactNode,
    link?: boolean,
    href?: string,
    onClick?: (e: React.SyntheticEvent) => any,
  }
  class BreadcrumbSection extends React.Component<BreadcrumbSectionProps, void> {}

  interface BreadcrumbProps extends GenericProps {
    // --- Optional ---
    children?: React.ReactNode,
    // TODO(zuko): is this limited to a string, or can it be a ReactNode?
    divider?: string,
    icon?: React.ReactNode,
    sections?: Array<any>,
    // TODO(zuko): should not include 'medium'
    size?: SemanticSize,
  }
  export class Breadcrumb extends React.Component<BreadcrumbProps, void> {
    public static Divider: BreadcrumbDivider
    public static Section: BreadcrumbSection
  }
  // TODO(zuko): Form
  // TODO(zuko): Grid
  // TODO(zuko): Menu
  // Message
  // ----------------------------------
  interface MessageContentProps extends GenericProps {
    // --- Optional ---
    children?: React.ReactNode,
    icon?: React.ReactNode,
  }
  class MessageContent extends React.Component<MessageContentProps, void> {}

  interface MessageHeaderProps extends GenericProps {
    // --- Optional ---
    children?: React.ReactNode,
    icon?: React.ReactNode,
  }
  class MessageHeader extends React.Component<MessageHeaderProps, void> {}

  interface MessageItemProps extends GenericProps {
    // --- Optional ---
    children?: React.ReactNode,
    icon?: React.ReactNode,
  }
  class MessageItem extends React.Component<MessageItemProps, void> {}

  interface MessageListProps extends GenericProps {
    // --- Optional ---
    children?: React.ReactNode,
    icon?: React.ReactNode,
    items?: Array<string>,
  }
  class MessageList extends React.Component<MessageListProps, void> {}

  interface MessageProps extends GenericProps {
    // --- Optional ---
    attached?: boolean | 'bottom',
    children?: React.ReactNode,
    className?: string,
    color?: SemanticColor,
    compact?: boolean,
    content?: string,
    floating?: boolean,
    header?: React.ReactNode,
    hidden?: boolean,
    icon?: string | boolean,
    list?: Array<string>
    onDismiss?: (event: React.SyntheticEvent) => any,
    // TODO(zuko): should not include 'medium'
    size?: SemanticSize,
    visible?: boolean,
    // possible types
    error?: boolean,
    info?: boolean,
    negative?: boolean,
    positive?: boolean,
    success?: boolean,
    warning?: boolean,
  }
  export class Message extends React.Component<MessageProps, void> {
    public static Content: MessageContent
    public static Header: MessageHeader
    public static Item: MessageItem
    public static List: MessageList
  }
  // TODO(zuko): Table

  // ======================================================
  // Modules
  // ======================================================
  // TODO(zuko): Accordion
  // TODO(zuko): Checkbox
  // TODO(zuko): Dropdown
  // TODO(zuko): Modal
  // TODO(zuko): Progress

  // ======================================================
  // Views
  // ======================================================
  // TODO(zuko): Item
  // TODO(zuko): Statistic

  // ======================================================
  // Addons
  // ======================================================
  // NOTE(zuko): This category breaks alphabetical ordering because it relies
  // on components defined in other categories
  // ======================================================
  // TODO(zuko): Confirm
  // TODO(zuko): Radio
  // TODO(zuko): Select
  // TODO(zuko): Textarea
}

export = Stardust
