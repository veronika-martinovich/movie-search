import { clearSearchText } from "./clearSearchText";

describe("clearSearchText", () => {
  it("should return empty string", () => {
    document.body.innerHTML = `<form class="search">
      <input 
      type="text" 
      name="search-movie" 
      class="search__text" 
      placeholder="Movie name..."  
      autofocus 
      autocomplete="off" 
      value="The nice guys"
      />
      <input type="submit" value="Search" class="search__button" />
      <span class="search__icon icon_search"></span>
      <span class="search__icon icon_clear"></span>
    </form>`;
    const clearIcon = document.querySelector(".icon_clear");
    const searchText = document.querySelector(".search__text");
    clearSearchText();
    clearIcon.click();
    expect(searchText.value).toMatch("");
  });
});
