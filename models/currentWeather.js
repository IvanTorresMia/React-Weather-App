
module.exports = function(sequelize, DataTypes) {
    var Weather = sequelize.define("Weather", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   len: [1, 50]
      // }
    });
  
    // Author.associate = function(models) {
    //   // Associating Author with Posts
    //   // When an Author is deleted, also delete any associated Posts
    //   Weather.hasMany(models.Post, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return Weather;
  };