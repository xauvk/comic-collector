

puts "Seeding...."

User.destroy_all
Collection.destroy_all
Issue.destroy_all

User.reset_pk_sequence
Collection.reset_pk_sequence
Issue.reset_pk_sequence

u1 = User.create!(username: "Evan", password: "123")
u2 = User.create!(username: "Alex", password: "1234")
u3 = User.create!(username: "John", password: "abc")
u4 = User.create!(username: "Jim", password: "abcd")
u5 = User.create!(username: "Kevin", password: "abc123")

