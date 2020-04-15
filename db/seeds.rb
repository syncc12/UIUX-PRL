# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# def dbCreateOrUpdate(inName, inRoute, inScreenshotPath, inDescription, inStatus)
#   eName = Project.exists?(name: inName)
#   eRoute = Project.exists?(route: inRoute)
#   eScreenshotPath = Project.exists?(screenshot_path: inScreenshotPath)
#   eDescription = Project.exists?(description: inDescription)
#   eStatus = Project.exists?(status: inStatus)
#   eAll = Project.exists?(name: inName, route: inRoute, screenshot_path: inScreenshotPath, description: inDescription, status: inStatus)

#   if eAll == false
#     if eName == false && eRoute == false && eScreenshotPath == false && eDescription == false && eStatus == false
#       Project.create( name: inName, route: inRoute, screenshot_path: inScreenshotPath, description: inDescription, status: inStatus )
#     else
#       Project.update( name: inName, route: inRoute, screenshot_path: inScreenshotPath, description: inDescription, status: inStatus )
#     end
#   end
# end


project_list = [
  [ 'Ideas', 'ideas', '', '', 'Done' ],
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
  [ 'Minesweeper', 'minesweepers', '', '', 'WIP' ],
  [ 'Hexapawn', 'hexapawns', '', '', 'Done' ],
  [ 'Clock', 'clocks', '', '', 'WIP' ],
  [ 'Timer', 'timers', '', '', 'WIP' ],
  [ 'Paint', 'paints', '', '', 'WIP' ],
  [ 'Korean Syllable Game', 'korean_syllable_games', '', '', 'WIP' ]
]

project_list.each do |pName, pRoute, pScreenshotPath, pDescription, pStatus|
  Project.create( name: pName, route: pRoute, screenshot_path: pScreenshotPath, description: pDescription, status: pStatus )
  # dbCreateOrUpdate(pName,pRoute,pScreenshotPath,pDescription,pStatus)
end