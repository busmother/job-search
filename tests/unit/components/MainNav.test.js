import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Bobo Careers");
  });

  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
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

describe("when user is logged out", () => {
  it("prompts user to sign in", () => {
    const wrapper = mount(MainNav);
    const loginButton = wrapper.find("[data-test='login-button']");
    const profileImage = wrapper.find("[data-test='profile-image']");
    expect(loginButton.exists()).toBe(true); 
    expect(profileImage.exists()).toBe(false);
  });
});

describe("when user logs in", () => {
  it("displays user profile picture", async () => {
    const wrapper = mount(MainNav);
    let profileImage = wrapper.find("[data-test='profile-image']");
    expect(profileImage.exists()).toBe(false);

    const loginButton = wrapper.find("[data-test='login-button']");
    await loginButton.trigger("click"); 

    profileImage = wrapper.find("[data-test='profile-image']");
    expect(profileImage.exists()).toBe(true);
  });

  it("displays subnavigation menu with additional information", () => {
    const wrapper = shallowMount(MainNav);
    let subnav = wrapper.find("[data-test='subnav']");
    expect(subnav.exsits()).toBe(false);
    
    const loginButton = wrapper.find("[data-test='login-button']");
    await loginButton.trigger("click");

    subnav = wrapper.find("[data-test='subnav']");
    expect(subnav.exists()).toBe(true)
  })
});
