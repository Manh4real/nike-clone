import {
  createSlice,
  // createEntityAdapter,
  createAsyncThunk,
  nanoid,
} from "@reduxjs/toolkit";

// import { getFromLocal } from "components/Main/data";
import { MAXIMUM_QUANTITY } from "../../constants";

const bagApi = [
  {
    id: "1abc",
    added: {
      baggedId: "X8Eh23FAvQQ__wzBqCiIl",
      size: 6,
      colorId: 0,
      quanity: 1,
    },
    category: "Best Seller",
    productName: "Nike Sportswear Essential Collection",
    type: "shoe",
    gender: "female",
    targetObj: "Men's Shoes",
    colorNum: 6,
    price: 170,
    onSale: true,
    oldPrice: 200,
    sizes: [
      6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 12.5, 13, 13.5, 14,
      14.5, 15,
    ],
    images: [
      "/images/product-1.jpg",
      "/images/product-2.jpg",
      "/images/product-3.jpg",
      "/images/product-4.jpg",
      "/images/product-5.jpg",
      "/images/product-6.jpg",
    ],
  },
];

// const bagAdapter = createEntityAdapter({
//   selectId: (baggedItem) => baggedItem.baggedId,
// });

const fetchBag = createAsyncThunk("bag/fetchBag", async function () {
  const result = await new Promise((res) => {
    setTimeout(() => {
      const data = bagApi || [];
      res({ data });
    }, 2000);
  });

  return result.data;
});

// const initialState = bagAdapter.getInitialState({
//   status: "idle",
//   error: null,
// });

const initialState = {
  status: "idle",
  error: null,
  data: [],
};

const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addToBag: {
      reducer: (state, action) => {
        const { colorId, size } = action.payload.added;
        const productId = action.payload.id;

        const addedProduct = state.data.find(
          (p) =>
            p.id === productId &&
            p.added.colorId === colorId &&
            p.added.size === size
        );

        if (addedProduct) {
          if (addedProduct.added.quanity < MAXIMUM_QUANTITY)
            addedProduct.added.quanity++;
          else {
            alert(
              `Exceeded required quanity! (Redux)\n(Max: ${MAXIMUM_QUANTITY})`
            );
          }
        } else {
          alert("Added to your Bag. (Redux)");
          state.data.push(action.payload);
        }
      },
      prepare: (payload) => {
        // console.log("payload: ", payload.added.baggedId);
        // payload.added.baggedId = nanoid();
        // return { payload };
        return {
          payload: {
            ...payload,
            added: {
              ...payload.added,
              baggedId: nanoid(),
            },
          },
        };
      },
    },
    removeFromBag: (state, action) => {
      const baggedId = action.payload;

      state.data = state.data.filter((p) => p.added.baggedId !== baggedId);
    },
    modifyFromBag: (state, action) => {
      const { baggedId, modifiedType, modifiedValue } = action.payload;
      const modifiedProduct = state.data.find(
        (p) => p.added.baggedId === baggedId
      );

      if (!modifiedProduct) return state;
      modifiedProduct.added[modifiedType] = modifiedValue;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBag.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBag.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchBag.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error;
      });
  },
});

export { fetchBag };
export const { addToBag, removeFromBag, modifyFromBag } = bagSlice.actions;

export const selectAllBaggedItems = (state) => state.bag.data;

export default bagSlice.reducer;
