/*

Use object literal syntax to create a garden object with
the attributes and behaviors described in spec/garden_spec.js.

*/

var garden = {
	name: "Kula Botanical Garden",
	location: "Makawao",
	flowers: [],
	addFlower: function(flower) {
		this.flowers.push(flower);
		return this.flowers;
	},
	plant: function(new_flowers) {
		final = this.flowers
		for(i=0;i<new_flowers.length;i++) {
			final.push(new_flowers[i])
		}
		return final
	},
	remove: function(flower) {
		index = this.flowers.indexOf(flower)
		final = this.flowers.splice(index, 1)
		return final
	},
	flowersByColor: function(color) {
		final = []
		for(i=0;i<this.flowers.length;i++) {
			if (this.flowers[i].color == color) {
				final.push(this.flowers[i])
			}
		}
		return final
	},
	flowersByName: function(name) {
		final = []
		for(i=0;i<this.flowers.length;i++) {
			if (this.flowers[i].name == name) {
				final.push(this.flowers[i])
			}
		}
		return final
	}
}
