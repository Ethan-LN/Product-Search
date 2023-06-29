# Product Search - Online Store

This is an online store application built using React. The store sells a variety of business and casual clothes, including pants, skirts, shirts, and jackets.

## Components

### ProductList

The `ProductList` component displays a list of available products. It utilizes the `Product` component to render individual product details.

### Product

The `Product` component displays the details of a single product. It formats the information nicely with headings and displays the price in dollars.

## Filtering by Category

The `ProductList` component provides filtering functionality based on the category of products. At the top of the component, there are four buttons that allow users to filter the products:

- Shirts: Clicking this button will display only the shirts in the product list.
- Pants and Skirts: Clicking this button will display only the pants and skirts in the product list.
- Jackets: Clicking this button will display only the jackets in the product list.
- All Products: Clicking this button will remove the category filter and display all products.

When a filter button is clicked, the list of products is updated to show only the products in that category. Clicking the "All Products" button removes the filter and displays all products, which is also the initial state of the `ProductList` component.
