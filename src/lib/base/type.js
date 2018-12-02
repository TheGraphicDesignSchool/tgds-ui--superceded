import {css} from "styled-components";

export default ({theme}) => css`

	h1 {
		font-size: 2em;
		margin: 0.67em 0;
	}
	
	
	hr {
		height: 0; /* 1 */
		overflow: visible; /* 2 */
	}
	
		
	pre {
	  font-family:
	    /* macOS 10.10+ */ Menlo,
	    /* Windows 6+ */ Consolas,
	    /* Android 4+ */ Roboto Mono,
	    /* Ubuntu 10.10+ */ Ubuntu Monospace,
	    /* KDE Plasma 5+ */ Noto Mono,
	    /* KDE Plasma 4+ */ Oxygen Mono,
	    /* Linux/OpenOffice fallback */ Liberation Mono,
	    /* fallback */ monospace; /* 1 */
	
	  font-size: 1em; /* 2 */
	}
	
	a {
	  background-color: transparent;
	}

	
	abbr[title] {
	  text-decoration: underline;
	  text-decoration: underline dotted;
	}

	
	b,
	strong {
	  font-weight: bolder;
	}

	
	code,
	kbd,
	samp {
	  font-family:
	    /* macOS 10.10+ */ Menlo,
	    /* Windows 6+ */ Consolas,
	    /* Android 4+ */ Roboto Mono,
	    /* Ubuntu 10.10+ */ Ubuntu Monospace,
	    /* KDE Plasma 5+ */ Noto Mono,
	    /* KDE Plasma 4+ */ Oxygen Mono,
	    /* Linux/OpenOffice fallback */ Liberation Mono,
	    /* fallback */ monospace; /* 1 */
	
	  font-size: 1em; /* 2 */
	}
	
	
	small {
	  font-size: 80%;
	}
	
	
	::-moz-selection {
	  color: #000; /* 1 */
	  text-shadow: none;
	}
	
	::selection {
	  color: #000; /* 1 */
	  text-shadow: none;
	}
	
	  
  h1, h2, h3, h4, h5, h6 {
      margin-top: 0;
      margin-bottom: .5rem;
  }
  
  p {
      margin-top: 0;
      margin-bottom: 1rem;
  }
  
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
    color: ${theme.link.color.visited}; 
    text-decoration: none;
  }

`
