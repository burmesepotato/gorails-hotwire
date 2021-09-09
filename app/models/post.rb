class Post < ApplicationRecord
    validates :title, :body, presence: true

    after_create_commit { broadcast_append_to "posts" }
    after_update_commit { broadcast_update_to "posts" }
    after_destroy_commit { broadcast_remove_to "posts" }
end
