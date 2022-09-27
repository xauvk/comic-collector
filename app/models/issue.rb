class Issue < ApplicationRecord
    has_many :collections, dependent: :destroy
    has_many :users, through: :collections
end
