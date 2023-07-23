import axios from "./api.service";

interface CategoryType {
  data: Array<string>;
}

const CategoryService = {
  async getAllCategories() {
    const { data }: CategoryType = await axios.get("products/categories");
    return data;
  },
};

export default CategoryService;
