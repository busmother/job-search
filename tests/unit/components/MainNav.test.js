import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("describes company name", async () => {
    const wrapper = mount(MainNav);
    await wrapper.setData({
      //wait until this is complete before moving onto the expect block
      company: "Super Corp",
    });
    expect(wrapper.text()).toMatch("Super Corp");
  });

  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']" //update from "li"
    ); 
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text);
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
});
