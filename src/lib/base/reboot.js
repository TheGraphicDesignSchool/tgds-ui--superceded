import {css} from 'styled-components'

export default ({theme}) => css`

  [tabindex='-1']:focus {
    outline: none !important;
  }
  
  //
  // Typography
  //
  //
  // Remove top margins from headings
  //
  
  h1, h2, h3, h4, h5, h6 {
      margin-top: 0;
      margin-bottom: .5rem;
  }
  
  //
  // Reset margins on paragraphs
  //

  p {
      margin-top: 0;
      margin-bottom: 1rem;
  }
  
  //
  // Abbreviations and acronyms

  abbr[data-original-title] {
      cursor: help;
      border-bottom: 1px dotted rgba(0,0,0,.1);
  }
  
  address {
      margin-bottom: 1rem;
      font-style: normal;
      line-height: inherit;
  }
  
  ol,
  ul,
  dl {
      margin-top: 0;
      margin-bottom: 1rem;
  }
  
  ol ol,
  ul ul,
  ol ul,
  ul ol {
      margin-bottom: 0;
  }
  
  dt {
      font-weight: 400;
  }
  
  dd {
      margin-bottom: .5rem;
      margin-left: 0; // Undo browser default
  }
  
  blockquote {
      margin: 0 0 1rem;
  }

  //
  // Links
  //
  //
  // a {
  //     color: $link-color;
  //     text-decoration: $link-decoration;
  //
  //     @include hover-focus {
  //         color: $link-hover-color;
  //         text-decoration: $link-hover-decoration;
  //     }
  //
  //     &:focus {
  //         @include tab-focus();
  //     }
  // }

  // NOTE: The following override makes card links and buttons links gray.
  // Commenting out because it does not appear that we need it. Make sure to fix the color inherit problem if uncommenting
  // a:not([href]):not([tabindex]) {
  //     color: inherit;
  //     text-decoration: none;
  //
  //     @include hover-focus {
  //         color: inherit;
  //         text-decoration: none;
  //     }
  //
  //     &:focus {
  //         outline: none;
  //     }
  // }

  //
  // Code
  //
  
  pre {
      margin-top: 0;
      margin-bottom: 1rem;
      overflow: auto;
  }

  //
  // Figures
  //

  figure {
      margin: 0 0 1rem;
  }

  //
  // Images
  //

  img {
    vertical-align: middle;
  }

  // iOS "clickable elements" fix for role="button"
  //

  [role='button'] {
    cursor: pointer;
  }

  // Avoid 300ms click delay on touch devices that support the \`touch-action\` CSS property.
  //

  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }

  //
  // Tables
  //

  table {
      border-collapse: collapse;
      background-color: transparent;
  }

  caption {
      padding-top: .5rem;
      padding-bottom: .5rem;
      color: rgba(0,0,0,.3);
      text-align: left;
      caption-side: bottom;
  }

  th {
      text-align: left;
  }

  //
  // Forms
  //

  label {
      display: inline-block;
      margin-bottom: .5rem;
  }

  // Work around a Firefox/IE bug where the transparent \`button\` background
  // results in a loss of the default \`button\` focus styles.
  //
  // Credit: https://github.com/suitcss/base/
  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  input,
  button,
  select,
  textarea {
    // Remove all \`margin\`s so our classes don't have to do it themselves.
    // margin: 0;
    // Normalize includes \`font: inherit;\`, so \`font-family\`. \`font-size\`, etc are
    // properly inherited. However, \`line-height\` isn't addressed there. Using this
    // ensures we don't need to unnecessarily redeclare the global font stack.
    // line-height: inherit;
    // iOS adds rounded borders by default
    border-radius: 0;
  }

  input[type='radio'],
  input[type='checkbox'] {
    // Apply a disabled cursor for radios and checkboxes.
    //
    // Note: Neither radios nor checkboxes can be readonly.
    &:disabled {
      cursor: not-allowed;
    }
  }

  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    // Remove the default appearance of temporal inputs to avoid a Mobile Safari
    // bug where setting a custom line-height prevents text from being vertically
    // centered within the input.
    //
    // Bug report: https://github.com/twbs/bootstrap/issues/11266
    -webkit-appearance: listbox;
  }

  textarea {
    // Textareas should really only resize vertically so they don't break their (horizontal) containers.
    resize: vertical;
  }

  fieldset {
    // Chrome and Firefox set a \`min-width: min-content;\` on fieldsets,
    // so we reset that to ensure it behaves more like a standard block element.
    // See https://github.com/twbs/bootstrap/issues/12359.
    min-width: 0;
    // Reset the default outline behavior of fieldsets so they don't affect page layout.
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    // Reset the entire legend element to match the \`fieldset\`
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: .5rem;
    // font-size: 1.5rem;
    line-height: inherit;
  }

  input[type='search'] {
    // This overrides the extra rounded corners on search inputs in iOS so that our
    // \`.form-control\` class can properly style them. Note that this cannot simply
    // be added to \`.form-control\` as it's not specific enough. For details, see
    // https://github.com/twbs/bootstrap/issues/11586.
    -webkit-appearance: none;
  }

  // Always hide an element with the \`hidden\` HTML attribute (from PureCSS).
  [hidden] {
    display: none !important;
  }

  // END BS4 REBOOT STYLES

  //Overrides carried over from earlier versions of Clarity

  dl {
    margin-bottom: 0;
    margin-top: 1rem;
  }

  table {
    border-spacing: 0;
  }

  a:link {
    color: ${theme.link.color.base};
    text-decoration: none;
  }

  a:hover {
    color: ${theme.link.color.hover};
    text-decoration: underline;
  }

  a:active {
    color: ${theme.link.color.active};
    text-decoration: underline;
  }

  a:visited {
    color: ${theme.link.color.visited}; //TODO: Not in the color palette. Will be added soon.
    text-decoration: none;
  }
}

`
