# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

project_list = [
  [ 'Calculator', 'calculators', '', '', 'Done' ],
  [ 'RPS', 'rps', '', '', 'Done' ],
  [ 'Piano', 'pianos', '', '', 'WIP' ],
  [ 'Thermometer', 'thermometers', '', '', 'WIP' ],
  [ 'Checkers', 'checkers', '', '', 'Done' ],
  [ 'Chess', 'chesses', '', '', 'WIP' ],
  [ 'Flip A Coin', 'flip_coins', '', '', 'WIP' ],
  [ 'Two Up', 'two_ups', '', '', 'WIP' ],
  [ 'Wheel', 'wheels', '', '', 'WIP' ],
  [ 'Character Counter', 'character_counters', '', '', 'WIP' ],
  [ 'DC Metro', 'dc_metros', '', '', 'WIP' ],
  [ 'Minesweeper', 'minesweepers', '', '', 'WIP' ]
]

project_list.each do |pName, pRoute, pScreenshotPath, pDescription, pStatus|
  Project.create( name: pName, route: pRoute, screenshot_path: pScreenshotPath, description: pDescription, status: pStatus )
end