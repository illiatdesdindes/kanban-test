class CreateApplicants < ActiveRecord::Migration[5.1]
  def change
    create_table :applicants do |t|
      t.string :name
      t.string :job
      t.string :avatar

      t.timestamps
    end
  end
end
