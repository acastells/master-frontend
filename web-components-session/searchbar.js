const eventFact = (eventName, detail) => {
	const options = {
	  bubbles: true,
	  cancelable: false,
	  composed: true,
	  detail,
	};
  
	return new CustomEvent(eventName, {
	  ...options,
	});
  };
  
  const getStyles = () => `
  .container {
	  position: relative;
	  padding: 0;
	  margin: 0;
	  border: 0;
	  width: 150px;
	  height: 30px;
	}
	
	.field {
	  width: 100%;
	  height: 100%;
	  border-radius: 3px;
	}
	
	.icons-container {
	  position: absolute;
	  top: 5px;
	  right: -10px;
	  width: 30px;
	  height: 30px;
	}
	
	.icon-search {
	  position: relative;
	  width: 50%;
	  height: 50%;
	  opacity: 1;
	  border-radius: 50%;
	  border: 3px solid #c7d0f8;
	}
	
	.icon-search:after {
	  content: "";
	  position: absolute;
	  bottom: -9px;
	  right: -2px;
	  width: 4px;
	  border-radius: 3px;
	  transform: rotate(-45deg);
	  height: 10px;
	  background-color: #c7d0f8;
	}
	
  `;
  
  // HTMLInputElement
  // class SearchBar extends HTMLDivElement {
  class SearchBar extends HTMLElement {
	constructor() {
	  super();
	  this.render();
	  // this.shadow = this.attachShadow()
	}
  
	render() {
	  console.log("calling render....");
	  const container = document.createElement("div");
	  container.setAttribute("class", "container");
  
	  const input = document.createElement("input");
	  input.setAttribute("type", "text");
	  input.setAttribute("placeholder", this.resolvePlaceholder());
	  input.setAttribute("class", "field");
  
	  const iconContainer = document.createElement("div");
	  iconContainer.setAttribute("class", "icons-container");
  
	  const iconSearch = document.createElement("div");
	  iconSearch.setAttribute("class", "icon-search");
  
	  const style = document.createElement("style");
	  style.textContent = getStyles();
  
	  const shadow = this.attachShadow({ mode: "open" });
  
	  iconContainer.appendChild(iconSearch);
	  container.appendChild(input);
	  container.appendChild(iconContainer);
  
	  shadow.appendChild(style);
	  shadow.appendChild(container);
  
	  this.dispatchMyEvent();
	  iconContainer.onclick = this.iconClickHandler(input);
	}
  
	resolvePlaceholder() {
	  if (this.hasAttribute("ph")) {
		return this.getAttribute("ph");
	  }
	  return "Search...";
	}
  
	// function() {}
	dispatchMyEvent() {
	  const myEvent = eventFact("myEvent", { name: "Joe", text: "hello" });
	  setTimeout(() => {
		this.dispatchEvent(myEvent);
	  }, 5_000);
	}
  
	iconClickHandler = (inputRef) => () => {
	  const myEvent2 = eventFact("myEvent2", { value: inputRef.value });
	  // const container =  this.shadowRoot.querySelector('.container');
	  // console.log(container);
	  // container.dispatchEvent(myEvent2);
	  this.dispatchEvent(myEvent2);
	};
  }
  
  customElements.define("search-bar", SearchBar);
  // customElements.define("search-bar", SearchBar, { extends: "div" });