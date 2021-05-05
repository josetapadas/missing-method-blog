class RemoveContextFromElements < ActiveRecord::Migration[6.1]
  def change
    remove_column :elements, :context
  end
end
