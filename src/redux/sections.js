const initialState = {
  items: [],
  loading: false,
  filter: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "sections/load/start":
      return {
        ...state,
        loading: true,
      };

    case "sections/load/success":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case "goods/setQuantity":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.rid === action.payload.groupId) {
            return {
              ...item,
              goods: item.goods.map((good) => {
                if (good.gid === action.payload.id) {
                  console.log(good);
                  return {
                    ...good,
                    goodQuantity: action.payload.quantity,
                  };
                }
                return good;
              }),
            };
          }

          return item;
        }),
      };

    default:
      return state;
  }
};

export const loadSections = () => {
  return (dispatch) => {
    dispatch({ type: "sections/load/start" });

    fetch("https://datainlife.ru/junior_task/get_products.php")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "sections/load/success",
          payload: json,
        });
      });
  };
};

export const setQuantity = (quantity, id, groupId) => {
  return {
    type: "goods/setQuantity",
    payload: { quantity, id, groupId },
  };
};

