

puts "Seeding...."

User.destroy_all
Collection.destroy_all
Issue.destroy_all

User.reset_pk_sequence
Collection.reset_pk_sequence
Issue.reset_pk_sequence

u1 = User.create!(username: "Edward", password: "123")
u2 = User.create!(username: "Alex", password: "123")
u3 = User.create!(username: "James", password: "abc")
u4 = User.create!(username: "Jim", password: "abcd")
u5 = User.create!(username: "Kevin", password: "abc123")

i1 = Issue.create(name: "Issue 1", image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Batman_Comic_Book_-_NARA_-_595420.gif")
i2 = Issue.create(name: "Issue 2", image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/dpool2022001_cover.jpg")
i3 = Issue.create(name: "Issue 3", image: "https://images-na.ssl-images-amazon.com/images/I/71bq-2eTwRL.jpg")
i4 = Issue.create(name: "Issue 4", image: "https://cdn.vox-cdn.com/thumbor/P9BFg60Hx8QXOWgPs4o62tcSZSk=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/18303898/Action_Comics_Vol_1_1000.jpg")
i5 = Issue.create(name: "Issue 5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA6WU6UT8coSrtwWPZC8xHESpMXgEKiWhiQ&usqp=CAU")
i6 = Issue.create(name: "Issue 6", image: "https://library.wustl.edu/wp-content/uploads/2018/05/1960scover1-small-350x535.jpg")


Collection.create(user: u1, issue: i2)
Collection.create(user: u1, issue: i3)
Collection.create(user: u1, issue: i6)
Collection.create(user: u2, issue: i1)
Collection.create(user: u2, issue: i4)
Collection.create(user: u2, issue: i5)

puts "Done Seeding!"