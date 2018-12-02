import {css} from 'styled-components'

export default ({theme}) => css`
	
	*,
	::before,
	::after {
	  background-repeat: no-repeat; /* 1 */
	  box-sizing: border-box; /* 2 */
	  text-decoration: inherit; /* 1 */
	  vertical-align: inherit; /* 2 */	}
	

	html {
	  cursor: default; /* 1 */
	  font-family:
	    system-ui,
	    /* macOS 10.11-10.12 */ -apple-system,
	    /* Windows 6+ */ Segoe UI,
	    /* Android 4+ */ Roboto,
	    /* Ubuntu 10.10+ */ Ubuntu,
	    /* Gnome 3+ */ Cantarell,
	    /* KDE Plasma 5+ */ Noto Sans,
	    /* fallback */ sans-serif,
	    /* macOS emoji */ "Apple Color Emoji",
	    /* Windows emoji */ "Segoe UI Emoji",
	    /* Windows emoji */ "Segoe UI Symbol",
	    /* Linux emoji */ "Noto Color Emoji"; /* 2 */
	
	  line-height: 1.15; /* 3 */
	  -moz-tab-size: 4; /* 4 */
	  tab-size: 4; /* 4 */
	  -ms-text-size-adjust: 100%; /* 5 */
	  -webkit-text-size-adjust: 100%; /* 5 */
	  word-break: break-word; /* 6 */
	}
	
	
	body {
	  margin: 0;
	}

	
	main {
	  display: block;
	}

	
	nav ol,
	nav ul {
	  list-style: none;
	}

	
	audio,
	canvas,
	iframe,
	img,
	svg,
	video {
	  vertical-align: middle;
	}

	
	audio,
	video {
	  display: inline-block;
	}

	
	audio:not([controls]) {
	  display: none;
	  height: 0;
	}

	
	img {
	  border-style: none;
	}

	
	svg:not([fill]) {
	  fill: currentColor;
	}

	
	svg:not(:root) {
	  overflow: hidden;
	}


	
	button,
	input,
	select,
	textarea {
	  font-family: inherit;
	  font-size: inherit;
	  line-height: inherit;
	}

	
	button,
	input,
	select {
	  margin: 0;
	}

	
	button {
	  overflow: visible; /* 1 */
	  text-transform: none; /* 2 */
	}

	
	button,
	[type="button"],
	[type="reset"],
	[type="submit"] {
	  -webkit-appearance: button;
	}

	
	fieldset {
	  padding: 0.35em 0.75em 0.625em;
	}

	
	input {
	  overflow: visible;
	}

	
	legend {
	  color: inherit; /* 2 */
	  display: table; /* 1 */
	  max-width: 100%; /* 1 */
	  white-space: normal; /* 1 */
	}

	
	progress {
	  display: inline-block; /* 1 */
	  vertical-align: baseline; /* 2 */
	}

	
	select {
	  text-transform: none;
	}

	
	textarea {
	  margin: 0; /* 1 */
	  overflow: auto; /* 2 */
	  resize: vertical; /* 3 */
	}

	
	[type="checkbox"],
	[type="radio"] {
	  padding: 0;
	}

	
	[type="search"] {
	  -webkit-appearance: textfield; /* 1 */
	  outline-offset: -2px; /* 2 */
	}

	
	::-webkit-inner-spin-button,
	::-webkit-outer-spin-button {
	  height: auto;
	}

	
	::-webkit-input-placeholder {
	  color: inherit;
	  opacity: 0.54;
	}

	
	::-webkit-search-decoration {
	  -webkit-appearance: none;
	}

	
	::-webkit-file-upload-button {
	  -webkit-appearance: button; /* 1 */
	  font: inherit; /* 2 */
	}

	
	::-moz-focus-inner {
	  border-style: none;
	  padding: 0;
	}

	
	:-moz-focusring {
	  outline: 1px dotted ButtonText;
	}

	
	details {
	  display: block;
	}

	
	dialog {
	  background-color: white;
	  border: solid;
	  color: black;
	  display: block;
	  height: -moz-fit-content;
	  height: -webkit-fit-content;
	  height: fit-content;
	  left: 0;
	  margin: auto;
	  padding: 1em;
	  position: absolute;
	  right: 0;
	  width: -moz-fit-content;
	  width: -webkit-fit-content;
	  width: fit-content;
	}
	
	dialog:not([open]) {
	  display: none;
	}

	
	summary {
	  display: list-item;
	}

	
	canvas {
	  display: inline-block;
	}

	
	template {
	  display: none;
	}

	
	a,
	area,
	button,
	input,
	label,
	select,
	summary,
	textarea,
	[tabindex] {
	  -ms-touch-action: manipulation; /* 1 */
	  touch-action: manipulation; /* 2 */
	}

	
	[hidden] {
	  display: none;
	}

	
	[aria-busy="true"] {
	  cursor: progress;
	}

	
	[aria-controls] {
	  cursor: pointer;
	}

	
	[aria-disabled="true"],
	[disabled] {
	  cursor: not-allowed;
	}

	
	[aria-hidden="false"][hidden]:not(:focus) {
	  clip: rect(0, 0, 0, 0);
	  display: inherit;
	  position: absolute;
	}

	[tabindex='-1']:focus {
	outline: none !important;
	}


  figure {
      margin: 0 0 1rem;
  }



  [role='button'] {
    cursor: pointer;
  }


  table {
      border-collapse: collapse;
      background-color: transparent;
     border-spacing: 0;
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


  label {
      display: inline-block;
      margin-bottom: .5rem;
  }


  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  input,
  button,
  select,
  textarea {
    border-radius: 0;
  }

  input[type='radio'],
  input[type='checkbox'] {
    &:disabled {
      cursor: not-allowed;
    }
  }

  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: listbox;
  }

  textarea {
    resize: vertical;
  }

  fieldset {

    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: .5rem;
    line-height: inherit;
  }

  input[type='search'] {
    -webkit-appearance: none;
  }

`
