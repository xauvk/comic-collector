class IssueSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :description, :volume, :issue_number
end
