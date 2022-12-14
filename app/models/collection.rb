class Collection < ApplicationRecord
  belongs_to :user
  belongs_to :issue
  
  validates :user, presence: true
  validates :issue, presence: true
  validates :user, uniqueness: { scope: :issue }
end
