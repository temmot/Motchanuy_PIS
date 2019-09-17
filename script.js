db.createCollection("Prod_cats")
db.Prod_cats.insertMany([
  {_id: 1, name_cat: "DVR", numb_cat: 1},
  {_id: 2, name_cat: "HD Android TV Boxes", numb_cat: 8},
  {_id: 3, name_cat: "Android TV Box HD controls", numb_cat: 4},
  {_id: 4, name_cat: "Android TV Box HD Keyboards", numb_cat: 4},
  {_id: 5, name_cat: "Android TV Box HD Airshow Mouse", numb_cat: 5},
  {_id: 6, name_cat: "Vacuum cleaners", numb_cat: 1},
  {_id: 7, name_cat: "Lights", numb_cat: 2},
  {_id: 8, name_cat: "IP cameras", numb_cat: 1},
  {_id: 9, name_cat: "Scams IP cameras", numb_cat: 2},
  {_id: 10, name_cat: "USB Flash", numb_cat: 2}])

db.createCollection("Prod_list")
db.Prod_list.insert({_id: 12220, full_name_prod: "Car DVD-E-ACE Mirror, 4.3 inch display, Full HD, MicroSD (up to 32GB), Motion Detector, IR backlight", price: 750.00, wholesale_price: 601.00, "prod_cat": {"$ref": "Prod_cats", "$id": "1"}})
db.Prod_list.insert({_id: 11995, full_name_prod: "TV Allwinner 4 cores  1GB DDR3 RAM  8GB  Wi-Fi HDMI 1.4  LAN 100Mbit Smart TV Box Android 7.1", price: 699.00, wholesale_price: 726.00, "prod_cat": {"$ref": "Prod_cats", "$id": "2"}})
db.Prod_list.insert({_id: 12119, full_name_prod: "TV Console R69 Allwinner 4 cores  2GB DDR3 RAM  16GB  Wi-Fi  HDMI 1.4  LAN 100Mbit Smart TV Box Android 7.1", price: 899.00, wholesale_price: 929.00, "prod_cat": {"$ref": "Prod_cats", "$id": "2"}})
db.Prod_list.insert({_id: 10989, full_name_prod: "Scishion V88 TV Console 4-core RK3229 (1.6 GHz)  1GB RAM  8GB storage  Mali-450 Smart Tv Box Android", price: 649.00, wholesale_price: 855.00, "prod_cat": {"$ref": "Prod_cats", "$id": "2"}})
db.Prod_list.insert({_id: 12183, full_name_prod: "TV Set-top box TANIX mini S905W 4 cores  2GB RAM  16GB  Mali-450  Wi-Fi  2 USB 2.0 Smart Tv Box Android 7.1", price: 949.00, wholesale_price: 1014.00, "prod_cat": {"$ref": "Prod_cats", "$id": "2"}})
db.Prod_list.insert({_id: 11509, full_name_prod: "TV Set-top box Tanix TX3 Max S905W 4 cores  2GB RAM 16GB  Wi-Fi  Bluetooth Smart TV Box Android 7.1", price: 1199.00, wholesale_price: 1318.00, "prod_cat": {"$ref": "Prod_cats", "$id": "2"}})
db.Prod_list.insert({_id: 12248, full_name_prod: "Tanix TX6 Allwiner H6 TV Console 4 cores  2GB RAM  16GB  Wi-Fi 2.4 + 5GHz  Bluetooth 4.1 Smart TV Box Android 9.0", price: 1149.00, wholesale_price: 1042.00, "prod_cat": {"$ref": "Prod_cats", "$id": "2"}})
db.Prod_list.insert({_id: 11982, full_name_prod: "TV Tanix TX6 Allwiner H6 4-core  4GB RAM  32GB Wi-Fi 2.4 + 5GHz  Bluetooth 4.1 Smart TV Box Android 9.0", price: 1449.00, wholesale_price: 1490.00, "prod_cat": {"$ref": "Prod_cats", "$id": "2"}})
db.Prod_list.insert({_id: 10949, full_name_prod: " X96 Mini S905W TV Console 4 cores  1GB RAM  8GB Smart Tv Box Android 7.1", price: 849.00, wholesale_price: 976.00, "prod_cat": {"$ref": "Prod_cats", "$id":  "2"}})
db.Prod_list.insert({_id: 11167, full_name_prod: "Joystick Wireless for Smartphone, TV Box, X3 WIRELESS Computer", price: 368.00, wholesale_price: 340.00, "prod_cat": {"$ref": "Prod_cats", "$id": "3"}})
db.Prod_list.insert({_id: 12018, full_name_prod: "Wireless Joystick for Smartphone, TV Box, X3 WIRELESS Computer bundled with Smartphone Mount", price: 322.00, wholesale_price: 297.00, "prod_cat": {"$ref": "Prod_cats", "$id": "3"}})
db.Prod_list.insert({_id: 11168, full_name_prod: "Attaching the joystick to the phone", price: 74.00, wholesale_price: 68.00, "prod_cat": {"$ref": "Prod_cats", "$id": "3"}})
db.Prod_list.insert({_id: 11965, full_name_prod: " Wall mount bracket H1 for TV set 18cm. by 15cm.", price: 185.00, wholesale_price: 173.00, "prod_cat": {"$ref": "Prod_cats", "$id": "3"}})
db.Prod_list.insert({_id: 11937, full_name_prod: "GOLDEN MEDIA Supervision Board 2 QWERTY Mini Keyboard with Integrated Touchpad Touchpad", price: 449.00, wholesale_price: 425.00, "prod_cat": {"$ref": "Prod_cats", "$id": "4"}})
db.Prod_list.insert({_id: 10993, full_name_prod: "Mini keyboard with touchpad for Smart Android TV with Black batteries", price: 299.00, wholesale_price: 250.00, "prod_cat": {"$ref": "Prod_cats", "$id": "4"}})
db.Prod_list.insert({_id: 10991, full_name_prod: "Mini backlit keyboard (3 colors), touchpad for Smart Android TV", price: 349.00, wholesale_price: 323.00, "prod_cat": {"$ref": "Prod_cats", "$id": "4"}})
db.Prod_list.insert({_id: 11966, full_name_prod: "Portable folding Bluetooth keyboard with Touchpad, on battery", price: 799.00, wholesale_price: 707.00, "prod_cat": {"$ref": "Prod_cats", "$id": "4"}})
db.Prod_list.insert({_id: 11757, full_name_prod: "Air Mouse G10 AIR with MICROPHONE for media setups, TVs", price: 299.00, wholesale_price: 289.00, "prod_cat": {"$ref": "Prod_cats", "$id": "5"}})
db.Prod_list.insert({_id: 11562, full_name_prod: "Air Mouse T2 Air Remote Control for Media Set-top boxes, TVs", price: 299.00, wholesale_price: 213.00, "prod_cat": {"$ref": "Prod_cats", "$id": "5"}})
db.Prod_list.insert({_id: 12221, full_name_prod: "Voice control remote control for G20S set top boxes", price: 299.00, wholesale_price: 236.00, "prod_cat": {"$ref": "Prod_cats", "$id": "5"}})
db.Prod_list.insert({_id: 12128, full_name_prod: "TV box remote control", price: 180.00, wholesale_price: 149.00, "prod_cat": {"$ref": "Prod_cats", "$id": "5"}})
db.Prod_list.insert({_id: 11035, full_name_prod: "Remote control for TV box programmable", price: 180.00, wholesale_price: 150.00, "prod_cat": {"$ref": "Prod_cats", "$id": "5"}})
db.Prod_list.insert({_id: 12188, full_name_prod: "Car vacuum cleaner DC 12V, 60W power from the cigarette lighter", price: 88.00, wholesale_price: 81.00, "prod_cat": {"$ref": "Prod_cats", "$id": "6"}})
db.Prod_list.insert({_id: 12059, full_name_prod: "Headlight Bailong BL-6902, Q5 Cree, 3 d.", price: 354.00, wholesale_price: 295.00, "prod_cat": {"$ref": "Prod_cats", "$id": "7"}})
db.Prod_list.insert({_id: 12192, full_name_prod: "Bailong flashlight bicycle BL-908, 5 LED, power 3  1.5 AAA, BOX", price: 99.00, wholesale_price: 99.00, "prod_cat": {"$ref": "Prod_cats", "$id": "7"}})
db.Prod_list.insert({_id: 11833, full_name_prod: "Besder HD 720P IP Camera for Wi-Fi, Night Vision", price: 668.00, wholesale_price: 617.00, "prod_cat": {"$ref": "Prod_cats", "$id": "8"}})
db.Prod_list.insert({_id: 12197, full_name_prod: "Model of the inner chamber dome A8-2", price: 85.00, wholesale_price:  56.00, "prod_cat": {"$ref": "Prod_cats", "$id": "9"}})
db.Prod_list.insert({_id: 12198, full_name_prod: "Exterior Camera DUMMY IR Model, Silver, Q50", price: 125.00, wholesale_price: 101.00, "prod_cat": {"$ref": "Prod_cats", "$id": "9"}})
db.Prod_list.insert({_id: 11608, full_name_prod: "USB Flash 3.0 Smartbuy 32GB Dock Black (SB32GBDK-K3)", price: 130.00, wholesale_price: 118.00, "prod_cat": {"$ref": "Prod_cats", "$id": "10"}})
db.Prod_list.insert({_id: 10039, full_name_prod: "Smartbuy 32GB Crown Black USB Flash Drive (SB32GBCRW-K)", price: 125.00, wholesale_price: 104.00, "prod_cat": {"$ref": "Prod_cats", "$id": "10"}})