(function(global){

    document.addEventListener("DOMContentLoaded", function () {
    
    let lightTheme = {
      name: "light",
      properties: {
        "--x-background-color": "#f0ece2",
        "--x-modal-background-color": "lightseagreen",
        "--x-foreground-color": "black",
        "--x-modal-foreground-color": "black"
      }
    };
  
    let darkTheme = {
      name: "dark",
      properties: {
        "--x-background-color": "#15202b",
        "--x-modal-background-color": "#303030",
        "--x-foreground-color": "#ECECEC",
        "--x-modal-foreground-color": "#018786"
      }
    };
  
    let activeTheme;
  
    console.log("dom content loaded !");
    //Setting lighttheme;
    setTheme(lightTheme);
  
    document.querySelector("#themelink").addEventListener("click", function () {
      console.log("Changing theme !");
      toggleTheme();
    });
  
    function setTheme(theme) {
      activeTheme = theme;
      Object.keys(theme.properties).forEach((propertyName) => {
        document.documentElement.style.setProperty(
          propertyName,
          theme.properties[propertyName]
        );
      });
    }
  
  global.toggleTheme = function toogleTheme() {
      activeTheme = activeTheme.name === "light" ? darkTheme : lightTheme;
      setTheme(activeTheme);
    }
    
  });
  
    
  })(this);
  
  