//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import BookUpdate from "./book-update";
import Left from "../core/left";
//@@viewOff:imports

const Book = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Book",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    book: UU5.PropTypes.shape({
      title: UU5.PropTypes.string.isRequired,
      author: UU5.PropTypes.string.isRequired,
      location: UU5.PropTypes.string.isRequired
    }),
    colorSchema: UU5.PropTypes.string,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    book: null,
    colorSchema: "blue",
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {}
  },
  //@@viewOff:defaultProps

  render({ book, colorSchema, onDelete, onUpdate }) {
    //@@viewOn:private
    function handleDelete() {
      onDelete(book);
    }
    function handleUpdate(values) {
      onUpdate(book, values);
    }
    function showError(content) {
      UU5.Environment.getPage()
        .getAlertBus()
        .addAlert({
          content,
          colorSchema: "red"
        });
    }
    //@@viewOff:private

    //@@viewOn:render

    if (!book) {
      return null;
    }

    return (
      <UU5.Bricks.Card
        colorSchema={colorSchema}
        colorSchema="blue"
        style="
          width:100%; 
          height:auto; 
          background-color: #E3F2FD; 
          direction: ltr;
          display: inline-block;"
      >
        <UU5.Bricks.Text
          colorSchema="black"
          style="
            float: left;
            height:auto;
            width: 40%"
        >
          {book.title}
        </UU5.Bricks.Text>
        <UU5.Bricks.Text
          style="
            float: left;
            width: 30%"
        >
          {book.author}
        </UU5.Bricks.Text>
        <UU5.Bricks.Text
          style="
            float: left;
            width: 15%"
        >
          {book.location}
        </UU5.Bricks.Text>
        <UU5.Bricks.Button
          onClick={handleDelete}
          colorSchema="red"
          style="
            float: right;"
        >
          <UU5.Bricks.Icon icon="mdi-delete" />
        </UU5.Bricks.Button>

        <BookUpdate book={book} onUpdate={handleUpdate} />
      </UU5.Bricks.Card>
    );
    //@@viewOff:render
  }
});

export default Book;
