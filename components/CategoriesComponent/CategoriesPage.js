// pages/categories.js
import React from "react";
import Categories from "./Categories";

const categoriesData = [
    {
        image:
          "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg",
        title: "Design",
      },
      {
        image:
          "https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg",
        title: "Development",
      },
      {
        image:
          "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg",
        title: "Marketing",
      },
      {
        image:
          "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg",
        title: "IT and Software",
      },
      {
        image:
          "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg",
        title: "Personal Development",
        description: "Description for Category 1",
      },
      {
        image:
          "https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg",
        title: "Business",
        description: "Description for Category 2",
      },
      {
        image:
          "https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg",
        title: "Photography",
      },
      {
        image:
          "https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg",
        title: "Music",
      },
    ];

const CategoriesPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {categoriesData.map((category, index) => (
        <Categories
          key={index}
          image={category.image}
          title={category.title}
          description={category.description}
        />
      ))}
    </div>
  );
};

export default CategoriesPage;
