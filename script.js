data = () => {
  return {
    links: [],
    submitError: false,
    link: "",
    submit() {
      if (this.link === "") {
        this.submitError = true;
        return;
      } else {
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
            this.links = [...this.links, { url: this.link, hash: json.hashid }];
            // console.log(this.links);
            this.link = "";
          });
      }
    },
    onKeyUp() {
      if (this.submitError) {
        this.submitError = false;
      }
    },
  };
};
