require 'rails_helper'

RSpec.describe Contact, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
  it "is valid with valid name and email" do
    expect(Contact.new(name: "Test", email: "test@example.com")).to be_valid
  end

  it "is invalid without name" do
    expect(Contact.new(email: "test@example.com")).to_not be_valid
  end

  it "is invalid with bad email" do
    expect(Contact.new(name: "Test", email: "bad-email")).to_not be_valid
  end

  it "is invalid with duplicate email" do
    Contact.create!(name: "Test", email: "dupe@example.com")
    expect(Contact.new(name: "Another", email: "dupe@example.com")).to_not be_valid
  end
end
