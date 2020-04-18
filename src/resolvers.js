import Service from "./config/services";
import Cart from "./models/cart";
import GraphQLDateTime from "graphql-type-datetime";
import { request } from 'graphql-request';

export const resolvers = {
  DateTime: GraphQLDateTime,
  Query: {
    async Movements() {
      let movements = [];
      let up = await request(Service.up.url, Service.up.query);
      up.Movements.forEach(obj => {
        obj.type = 'up';
        movements.push(obj);
      });
      let left = await request(Service.left.url, Service.left.query);
      left.Movements.forEach(obj => {
        obj.type = 'left';
        movements.push(obj);
      });
      let right = await request(Service.right.url, Service.right.query);
      right.Movements.forEach(obj => {
        obj.type = 'right';
        movements.push(obj);
      });
      let down = await request(Service.down.url, Service.down.query);
      down.Movements.forEach(obj => {
        obj.type = 'down';
        movements.push(obj);
      });
      movements = movements.sort((a, b) => new Date(b.created) - new Date(a.created));

      return movements;
    },
    async Cart() {
      let cart = await Cart.findOne({ 'code': 'nabucodonosor-001' });
      return cart;
    }
  },
  Mutation: {
    async switchCart() {
      let cart = await Cart.findOne({ 'code': 'nabucodonosor-001' });
      if (cart) {
        cart.switchedOn = cart.switchedOn ? !cart.switchedOn : true;
        if (cart.switchedOn)
          cart.lastOn = new Date();
        else
          cart.lastOff = new Date();
        await cart.save();
      }
      else {
        cart = new Cart({ code: 'nabucodonosor-001', switchedOn: true });
        await cart.save();
      }
      return cart;
    }
  }
}