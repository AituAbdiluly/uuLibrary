//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Left from "../core/left";
//@@viewOff:imports

const Location = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Location",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    location: UU5.PropTypes.shape({
      id: UU5.PropTypes.string.isRequired,
      name: UU5.PropTypes.string.isRequired,
      capacity: UU5.PropTypes.string.isRequired,

    }),
    colorSchema: UU5.PropTypes.string,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    location: null,
    colorSchema: "yellow",
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {}
  },
  //@@viewOff:defaultProps

  render({ location, colorSchema, onDelete }) {
    //@@viewOn:private
    function handleDelete() {
      onDelete(location);
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderHeader() {
      return (
        <>
          {location.name}
          <UU5.Bricks.Button onClick={handleDelete} colorSchema="red">
            <UU5.Bricks.Icon icon="mdi-delete" />
          </UU5.Bricks.Button>
        </>
      );
    }

    if (!location) {
      return null;
    }
    let text = {style:"float:Left; width:33% "};
    return (
      <UU5.Bricks.Card  colorSchema={colorSchema} colorSchema="blue">
        <UU5.Bricks.Text colorSchema="black"className={text} style="
        float: left;

  width: 33%"
>{location.id}</UU5.Bricks.Text>
        <UU5.Bricks.Text style="
        float: left;

  width: 33%">{location.name}</UU5.Bricks.Text>
        <UU5.Bricks.Text style="
        float: left;

  width: 22%">{location.capacity}</UU5.Bricks.Text>
  <UU5.Bricks.Button onClick={handleDelete} colorSchema="red" style="
        float: left;

  ">
            <UU5.Bricks.Icon icon="mdi-delete" />
          </UU5.Bricks.Button>
        <UU5.Bricks.Rating  colorSchema="red" style="overflow:hidden; width : 0; height: 30px"/>
      </UU5.Bricks.Card>
    );
    //@@viewOff:render
  }
});

export default Location;