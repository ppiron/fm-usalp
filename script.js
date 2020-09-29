data = () => {
  return {
    links: JSON.parse(window.sessionStorage.getItem("links")) || [],
    submitError: false,
    invalidURL: false,
    menuOpen: false,
    // copySuccess: false,
    link: "",
    submit() {
      if (this.link === "") {
        this.submitError = true;
        return;
      } else {
        this.invalidURL = false;
        fetch("https://rel.ink/api/links/", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: this.link,
          }),
          method: "POST",
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            if (json.url[0] && json.url[0] === "Enter a valid URL.") {
              this.invalidURL = true;
            } else {
              this.links = [
                ...this.links,
                { url: this.link, hash: json.hashid, copied: false },
              ];
              window.sessionStorage.setItem(
                "links",
                JSON.stringify(this.links)
              );
              // console.log(this.links);
              this.link = "";
            }
          });
      }
    },
    onInput() {
      if (this.submitError) {
        this.submitError = false;
      }
    },
    onKeyUp(event) {
      if (event.code === "Enter") {
        this.submit();
      }
    },
    copy(string, index) {
      navigator.clipboard.writeText(string).then(
        () => {
          // this.copySuccess = true;
          this.links[index]["copied"] = true;
          window.setTimeout(() => {
            this.copySuccess = false;
            this.links[index]["copied"] = false;
          }, 1500);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  };
};
