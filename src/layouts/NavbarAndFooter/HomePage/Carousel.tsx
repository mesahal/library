import { ReturnBook } from "./ReturnBook";

export const Carousel = () => {
  return (
    <div className="container mt-5" style={{ height: 550 }}>
      <div className="homepage-carousel-title">
        <h3>Find your next</h3>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide mt-5 d-none d-lg-block"
        data-bs-interval="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-item-center">
              <ReturnBook />
              <ReturnBook />
              <ReturnBook />
            </div>
          </div>

          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-item-center">
              <ReturnBook />
              <ReturnBook />
              <ReturnBook />
            </div>
          </div>

          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-item-center">
              <ReturnBook />
              <ReturnBook />
              <ReturnBook />
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="d-lg-none mt-3">
        <div className="row d-flex juntify-content-center align-items-center">
          <ReturnBook />
        </div>
      </div>
      <div className="homepage-carousel-title mt-3">
        <a className="btn btn-outline-secondary btn-lg" href="#">
          View More
        </a>
      </div>
    </div>
  );
};

/*
Outer Container
mt-5: Adds a top margin (margin-top: 5 * base spacing).
style={{ height: 550 }}: Inline style to set the height of the carousel container to 550px.

Title Section
homepage-carousel-title: Custom class likely used to style the title. The styles are not shown in the code but could control font size, color, or positioning.

Carousel Container
carousel: Base Bootstrap class for enabling carousel functionality.
carousel-dark: Sets the color scheme of the carousel to dark mode for better visibility of controls.
slide: Adds the sliding animation between carousel items.
mt-5: Adds top margin for spacing.
d-none d-lg-block: Hides this carousel on screen sizes smaller than the lg breakpoint.

Carousel Inner
carousel-inner: Bootstrap class for grouping the carousel items inside the carousel.

Carousel Item
carousel-item: Represents individual slides of the carousel.
active: Indicates the active/currently visible slide. Only one item should have this class at a time.

Row in Carousel Item
row: Bootstrap class to create a horizontal layout.
d-flex: Applies Flexbox layout to the row for alignment.
justify-content-center: Horizontally centers the content within the row.
align-item-center: Misspelled version of align-items-center (correct class). It should vertically align content within the row.

Column in Carousel Item
col-xs-6 col-sm-6 col-md-4 col-lg-3: Bootstrap grid classes for responsive column widths:
col-xs-6: Takes half the width on extra-small screens.
col-sm-6: Takes half the width on small screens.
col-md-4: Takes one-third of the width on medium screens.
col-lg-3: Takes one-fourth of the width on large screens.
mb-3: Adds bottom margin to create spacing between columns.

Content Wrapper
text-center: Centers the text and inline elements horizontally.

Reserve Button
btn: Bootstrap base class for buttons.
main-color: Likely a custom class to apply a specific button color.
text-white: Sets the button text color to white.

Carousel Navigation Buttons
carousel-control-prev: Bootstrap class for the "previous" button.
carousel-control-prev-icon: Sets the icon for the "previous" button.
carousel-control-next: Bootstrap class for the "next" button.
carousel-control-next-icon: Sets the icon for the "next" button.
visually-hidden: Hides the associated text (e.g., "Previous" or "Next") for users who can see the icons but keeps it accessible for screen readers.

Mobile View Section
d-lg-none: Ensures this section is only visible on screen sizes smaller than lg.
mt-3: Adds top margin for spacing.
row: Creates a horizontal layout.
d-flex: Applies Flexbox layout to the row for alignment.
juntify-content-center align-items-center:
juntify-content-center: Misspelled version of justify-content-center. Centers the content horizontally.
align-items-center: Vertically aligns content in the row.

View More Button
btn: Base Bootstrap button class.
btn-outline-secondary: Sets the button style to a bordered "secondary" color scheme.
btn-lg: Increases the button size.
*/
