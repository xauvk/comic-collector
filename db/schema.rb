# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_26_124740) do
  create_table "collections", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "issue_id", null: false
    t.string "status"
    t.integer "rating"
    t.index ["issue_id"], name: "index_collections_on_issue_id"
    t.index ["user_id", "issue_id"], name: "index_collections_on_user_id_and_issue_id", unique: true
    t.index ["user_id"], name: "index_collections_on_user_id"
  end

  create_table "issues", force: :cascade do |t|
    t.string "name"
    t.string "volume"
    t.text "description"
    t.string "image"
    t.integer "issue_number"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
  end

  add_foreign_key "collections", "issues"
  add_foreign_key "collections", "users"
end
