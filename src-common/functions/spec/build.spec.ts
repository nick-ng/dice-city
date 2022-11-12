import assert from "node:assert";

import type { City, Supply } from "@common/types/index.js";
import { addEstablishmentToCity, addLandmarkToCity } from "../build.js";

describe("add establishment", () => {
  it("should let you build an available establishment", (done) => {
    const supply: Supply = {
      ranch: ["ranch:0", "ranch:3", "ranch:5", "ranch:1", "ranch:2", "ranch:4"],
      tvStation: ["tvStation:3", "tvStation:1", "tvStation:2", "tvStation:0"],
    };
    const city: City = { establishments: {}, landmarks: {} };

    const after1 = addEstablishmentToCity(city, supply, "ranch");

    assert.equal(1, after1.city.establishments.ranch.length);
    assert.equal("", after1.error);

    const after2 = addEstablishmentToCity(
      after1.city,
      after1.supply,
      "tvStation"
    );

    assert.equal(1, after2.city.establishments.tvStation.length);
    assert.equal(1, after2.city.establishments.ranch.length);

    const after3 = addEstablishmentToCity(after2.city, after2.supply, "ranch");

    assert.equal(1, after3.city.establishments.tvStation.length);
    assert.equal(2, after3.city.establishments.ranch.length);

    done();
  });

  it("should not let you build a major establishment you already have", (done) => {
    const supply: Supply = {
      tvStation: ["tvStation:3", "tvStation:1", "tvStation:2", "tvStation:0"],
    };
    const city: City = { establishments: {}, landmarks: {} };

    const after1 = addEstablishmentToCity(city, supply, "tvStation");
    const after2 = addEstablishmentToCity(
      after1.city,
      after1.supply,
      "tvStation"
    );

    assert.equal(1, after2.city.establishments.tvStation.length);
    assert.equal(3, after2.supply.tvStation.length);
    assert.equal("already have major establishment tvStation", after2.error);

    done();
  });

  it("should not let you build a establishment that has run out", (done) => {
    const supply: Supply = {
      ranch: [],
    };
    const city1: City = { establishments: {}, landmarks: {} };
    const city2: City = {
      establishments: { ranch: ["ranch:0"] },
      landmarks: {},
    };

    const after1 = addEstablishmentToCity(city1, supply, "ranch");

    assert.equal("supply is out of ranch", after1.error);
    assert.equal(0, after1.city.establishments.ranch.length);

    const after2 = addEstablishmentToCity(city2, supply, "ranch");
    assert.equal("supply is out of ranch", after2.error);
    assert.equal(1, after2.city.establishments.ranch.length);

    done();
  });

  it("should not let you build a establishment that isn't part of the game", (done) => {
    const supply: Supply = {
      forest: [],
    };
    const city: City = { establishments: {}, landmarks: {} };

    const after1 = addEstablishmentToCity(city, supply, "ranch");

    assert.equal("supply doesn't have ranch", after1.error);
    assert(!("ranch" in after1.city));

    done();
  });
});

describe("add landmark", () => {
  it("should let you build landmarks", (done) => {
    const city: City = {
      establishments: {},
      landmarks: {
        radioTower: false,
        amusementPark: false,
        shoppingMall: false,
        trainStation: false,
      },
    };
    const availableLandmarks = [
      "radioTower",
      "amusementPark",
      "shoppingMall",
      "trainStation",
    ];

    const after1 = addLandmarkToCity(city, availableLandmarks, "trainStation");

    assert(after1.city.landmarks.trainStation);
    assert(!after1.city.landmarks.radioTower);

    const after2 = addLandmarkToCity(
      after1.city,
      availableLandmarks,
      "radioTower"
    );

    assert(after2.city.landmarks.trainStation);
    assert(after2.city.landmarks.radioTower);

    done();
  });

  it("should not let you build a landmark you already have", (done) => {
    const city: City = {
      establishments: {},
      landmarks: {
        radioTower: false,
        amusementPark: false,
        shoppingMall: false,
        trainStation: true,
      },
    };
    const availableLandmarks = [
      "radioTower",
      "amusementPark",
      "shoppingMall",
      "trainStation",
    ];

    const after1 = addLandmarkToCity(city, availableLandmarks, "trainStation");

    assert(after1.city.landmarks.trainStation);
    assert.equal("you already have a trainStation", after1.error);

    done();
  });

  it("should not let you build a landmark that isn't part of the game", (done) => {
    const city: City = {
      establishments: {},
      landmarks: {
        radioTower: false,
        amusementPark: false,
        shoppingMall: false,
        trainStation: true,
      },
    };
    const availableLandmarks = [
      "radioTower",
      "amusementPark",
      "shoppingMall",
      "trainStation",
    ];

    const after1 = addLandmarkToCity(city, availableLandmarks, "airport");

    assert.equal("airport is not available", after1.error);
    done();
  });
});
