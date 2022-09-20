class User < ApplicationRecord
    has_many :collections
    has_many :issues, through: :collections
    has_secure_password
end
