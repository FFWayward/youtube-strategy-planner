import React, { useState } from 'react';
import { Calendar, Target, Users, Video, DollarSign, BookOpen, CheckCircle2, Plus, Trash2, Download } from 'lucide-react';

const YouTubeStrategyPlanner = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1: Getting Started
    channelWhy: '',
    targetAudience: {
      age: '',
      gender: '',
      location: '',
      interests: '',
      problems: ''
    },
    competition: '',
    uploadSchedule: '',
    
    // Step 2: Niche Selection
    skills: '',
    category: '',
    nicheTopic: '',
    
    // Step 3: Channel Setup
    channelName: '',
    channelDescription: '',
    socialLinks: {
      instagram: '',
      twitter: '',
      facebook: '',
      website: ''
    },
    
    // Step 4: Content Strategy
    videoTypes: [],
    contentPillars: [],
    
    // Step 5: Monetization Plan
    monetizationMethods: [],
    
    // Step 6: Goals & Milestones
    goals: []
  });

  const steps = [
    { title: "Getting Started", icon: Target },
    { title: "Choose Your Niche", icon: BookOpen },
    { title: "Channel Setup", icon: Video },
    { title: "Content Strategy", icon: Calendar },
    { title: "Monetization Plan", icon: DollarSign },
    { title: "Goals & Review", icon: CheckCircle2 }
  ];

  const categories = [
    "Comedy", "Autos and Vehicles", "Entertainment", "Education", 
    "Film & Animation", "How-to and Style", "Gaming", "Music", 
    "Nonprofits and Activism", "News and Politics", "Pets and Animals", 
    "People and Blogs", "Science and Technology", "Travel and Events", "Sports"
  ];

  const videoTypeOptions = [
    "Vlogs", "Interviews", "Webinars", "Events", "Presentations", 
    "Tutorials", "Product Reviews", "Q&A Sessions", "Behind the Scenes"
  ];

  const monetizationOptions = [
    "YouTube Partner Program", "Affiliate Marketing", "Merchandise Sales", 
    "Sponsored Content", "Course Sales", "Consulting Services", 
    "Patreon/Memberships", "Product Sales"
  ];

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateNestedData = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
  };

  const addToArray = (field, item) => {
    if (item.trim()) {
      setFormData(prev => ({
        ...prev,
        [field]: [...prev[field], item.trim()]
      }));
    }
  };

  const removeFromArray = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const isFormComplete = () => {
    return formData.channelWhy && 
           formData.nicheTopic && 
           formData.targetAudience.age && 
           formData.uploadSchedule;
  };

  const generatePDF = async () => {
    // Import jsPDF dynamically to avoid SSR issues
    const { jsPDF } = await import('jspdf');
    
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    let yPosition = 35;

    // Wayward Branding Header with gradient effect
    // Purple gradient background
    doc.setFillColor(194, 175, 255); // #c2afff
    doc.rect(0, 0, pageWidth, 30, 'F');
    
    // Add a darker purple accent
    doc.setFillColor(229, 220, 255); // #e5dcff (lighter)
    doc.rect(0, 0, pageWidth * 0.6, 30, 'F');
    
    // Wayward logo text
    doc.setTextColor(17, 17, 17); // #111111 (black)
    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    doc.text('wayward', margin, 20);
    
    doc.setFontSize(11);
    doc.setTextColor(17, 17, 17);
    doc.text('YouTube Channel Strategy Plan', pageWidth - margin - 55, 20);

    // Reset text color and position
    doc.setTextColor(17, 17, 17); // #111111
    yPosition = 50;

    // Title
    doc.setFontSize(22);
    doc.setFont(undefined, 'bold');
    doc.text('My YouTube Channel Strategy', margin, yPosition);
    yPosition += 15;

    // Date
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text(`Created: ${new Date().toLocaleDateString()}`, margin, yPosition);
    yPosition += 20;

    // Helper function to add sections
    const addSection = (title, content, isArray = false) => {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 40;
      }
      
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(194, 175, 255); // Wayward purple #c2afff
      doc.text(title, margin, yPosition);
      yPosition += 8;
      
      doc.setFontSize(11);
      doc.setFont(undefined, 'normal');
      doc.setTextColor(17, 17, 17); // #111111
      
      if (isArray && Array.isArray(content)) {
        content.forEach(item => {
          if (yPosition > 270) {
            doc.addPage();
            yPosition = 40;
          }
          doc.text(`• ${item}`, margin + 5, yPosition);
          yPosition += 6;
        });
      } else {
        const lines = doc.splitTextToSize(content || 'Not specified', pageWidth - 2 * margin);
        lines.forEach(line => {
          if (yPosition > 270) {
            doc.addPage();
            yPosition = 40;
          }
          doc.text(line, margin, yPosition);
          yPosition += 6;
        });
      }
      yPosition += 12;
    };

    // Add all sections
   addSection('🎯 My Why', formData.channelWhy);
addSection('📊 Target Audience', `Age: ${formData.targetAudience.age}\nGender: ${formData.targetAudience.gender}\nLocation: ${formData.targetAudience.location}\nProblems they face: ${formData.targetAudience.problems}`);
addSection('🎬 Niche & Category', `Category: ${formData.category}\nSpecific Niche: ${formData.nicheTopic}\nSkills: ${formData.skills}`);
addSection('📺 Channel Details', `Name Ideas: ${formData.channelName}\nDescription: ${formData.channelDescription}\nUpload Schedule: ${formData.uploadSchedule}`);
addSection('📱 Social Media Links', `Instagram: ${formData.socialLinks.instagram}\nTwitter: ${formData.socialLinks.twitter}\nFacebook: ${formData.socialLinks.facebook}\nWebsite: ${formData.socialLinks.website}`);
addSection('🎥 Content Types', formData.videoTypes, true);
addSection('📋 Content Pillars', formData.contentPillars, true);
addSection('💰 Monetization Methods', formData.monetizationMethods, true);
addSection('🎯 Goals & Milestones', formData.goals, true);
addSection('🏁 Competition Analysis', formData.competition);

    // Footer with Wayward branding
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
     doc.text('Created with the Wayward YouTube Strategy Planner', margin, doc.internal.pageSize.height - 15);
      doc.text('WaywardCreatorCommunity.com', margin, doc.internal.pageSize.height - 10);
      doc.setTextColor(194, 175, 255); // Purple page numbers
      doc.text(`${i} / ${pageCount}`, pageWidth - margin - 15, doc.internal.pageSize.height - 10);
    }

    // Download the PDF
    doc.save(`${formData.channelName || 'My'}-YouTube-Strategy.pdf`);
  };

  const renderStep = () => {
    switch(currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Getting Started</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Why do you want to start a YouTube channel? (Your "Why")
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                rows="3"
                placeholder="Be specific about your motivation and goals..."
                value={formData.channelWhy}
                onChange={(e) => updateFormData('channelWhy', e.target.value)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience Age Range</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
                  placeholder="e.g., 25-35"
                  value={formData.targetAudience.age}
                  onChange={(e) => updateNestedData('targetAudience', 'age', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Gender</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
                  value={formData.targetAudience.gender}
                  onChange={(e) => updateNestedData('targetAudience', 'gender', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="All">All Genders</option>
                  <option value="Male">Primarily Male</option>
                  <option value="Female">Primarily Female</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Location</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
                placeholder="e.g., United States, Global, English-speaking countries"
                value={formData.targetAudience.location}
                onChange={(e) => updateNestedData('targetAudience', 'location', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">What problems does your audience face?</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
                rows="3"
                placeholder="Describe the main challenges your target audience faces..."
                value={formData.targetAudience.problems}
                onChange={(e) => updateNestedData('targetAudience', 'problems', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Schedule</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
                value={formData.uploadSchedule}
                onChange={(e) => updateFormData('uploadSchedule', e.target.value)}
              >
                <option value="">Select frequency...</option>
                <option value="Daily">Daily</option>
                <option value="3x per week">3 times per week</option>
                <option value="2x per week">2 times per week</option>
                <option value="Weekly">Weekly</option>
                <option value="Bi-weekly">Bi-weekly</option>
              </select>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Choose Your Niche</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">What are you good at? List your skills and expertise</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
                rows="3"
                placeholder="List your skills, hobbies, professional expertise..."
                value={formData.skills}
                onChange={(e) => updateFormData('skills', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">YouTube Category</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
                value={formData.category}
                onChange={(e) => updateFormData('category', e.target.value)}
              >
                <option value="">Select a category...</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Specific Niche Topic</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
                placeholder="e.g., Home workouts for busy moms, Tech reviews for seniors, etc."
                value={formData.nicheTopic}
                onChange={(e) => updateFormData('nicheTopic', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Competition Analysis</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
                rows="4"
                placeholder="List 3-5 similar channels and what makes you different..."
                value={formData.competition}
                onChange={(e) => updateFormData('competition', e.target.value)}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Channel Setup</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Channel Name Ideas</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
                placeholder="Keep it short, memorable, and related to your niche"
                value={formData.channelName}
                onChange={(e) => updateFormData('channelName', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Channel Description (About Section)</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
                rows="4"
                placeholder="Describe what your channel is about and include relevant keywords..."
                value={formData.channelDescription}
                onChange={(e) => updateFormData('channelDescription', e.target.value)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Instagram Handle</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
                  placeholder="@yourusername"
                  value={formData.socialLinks.instagram}
                  onChange={(e) => updateNestedData('socialLinks', 'instagram', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">X (Twitter) Handle</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
                  placeholder="@yourusername"
                  value={formData.socialLinks.twitter}
                  onChange={(e) => updateNestedData('socialLinks', 'twitter', e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Facebook Page</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
                  placeholder="facebook.com/yourpage"
                  value={formData.socialLinks.facebook}
                  onChange={(e) => updateNestedData('socialLinks', 'facebook', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
                  placeholder="https://yourwebsite.com"
                  value={formData.socialLinks.website}
                  onChange={(e) => updateNestedData('socialLinks', 'website', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Content Strategy</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Video Types You'll Create</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                {videoTypeOptions.map(type => (
                  <label key={type} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.videoTypes.includes(type)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          addToArray('videoTypes', type);
                        } else {
                          removeFromArray('videoTypes', formData.videoTypes.indexOf(type));
                        }
                      }}
                      className="text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content Pillars (3-5 main topics you'll cover)</label>
              <ContentPillarInput 
                pillars={formData.contentPillars} 
                onAdd={(pillar) => addToArray('contentPillars', pillar)}
                onRemove={(index) => removeFromArray('contentPillars', index)}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Monetization Plan</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select your monetization methods</label>
              <div className="space-y-2">
                {monetizationOptions.map(method => (
                  <label key={method} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.monetizationMethods.includes(method)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          addToArray('monetizationMethods', method);
                        } else {
                          removeFromArray('monetizationMethods', formData.monetizationMethods.indexOf(method));
                        }
                      }}
                      className="text-purple-500 focus:ring-purple-500"
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">💡 Monetization Tips</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Start with audience building before focusing heavily on monetization</li>
                <li>• YouTube Partner Program requires 1,000 subscribers and 4,000 watch hours</li>
                <li>• Affiliate marketing can start immediately with relevant products</li>
                <li>• Always disclose sponsored content and affiliate links</li>
              </ul>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Goals & Milestones</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Set Your Goals</label>
              <GoalInput 
                goals={formData.goals}
                onAdd={(goal) => addToArray('goals', goal)}
                onRemove={(index) => removeFromArray('goals', index)}
              />
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">📋 Your Channel Strategy Summary</h3>
              <div className="space-y-3 text-sm">
                <div><strong>Niche:</strong> {formData.nicheTopic || 'Not specified'}</div>
                <div><strong>Target Audience:</strong> {formData.targetAudience.age} year olds, {formData.targetAudience.gender}, {formData.targetAudience.location}</div>
                <div><strong>Upload Schedule:</strong> {formData.uploadSchedule || 'Not specified'}</div>
                <div><strong>Content Types:</strong> {formData.videoTypes.join(', ') || 'None selected'}</div>
                <div><strong>Monetization:</strong> {formData.monetizationMethods.join(', ') || 'None selected'}</div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">🎯 Next Steps</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>1. Download your strategy PDF using the button below</li>
                <li>2. Create your YouTube channel with the planned name and description</li>
                <li>3. Design channel art and choose an attractive profile picture</li>
                <li>4. Create your first 3-5 videos before launching</li>
                <li>5. Set up your social media accounts</li>
                <li>6. Plan your first month of content</li>
                <li>7. Start building your audience through the strategies in the book</li>
              </ul>
            </div>

            {isFormComplete() && (
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Download className="text-blue-600" size={20} />
                  <div>
                    <h3 className="font-semibold text-blue-800">Ready to Download!</h3>
                    <p className="text-sm text-blue-600">Your strategy is complete. Click "Download My Strategy PDF" to get your personalized plan.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-300 rounded-full mr-3 flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">wayward</h1>
        </div>
        <h2 className="text-xl text-gray-600 mb-2">YouTube Channel Strategy Planner</h2>
        <p className="text-gray-500">Plan your successful YouTube channel step by step</p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-between items-center mb-8 overflow-x-auto pb-2">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div 
              key={index}
              className={`flex flex-col items-center min-w-0 flex-1 ${
                index <= currentStep ? 'text-purple-600' : 'text-gray-400'
              }`}
            >
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${
                  index <= currentStep 
                    ? 'bg-gradient-to-r from-purple-400 to-purple-300 text-white' 
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                <Icon size={20} />
              </div>
              <span className="text-xs text-center font-medium">{step.title}</span>
              {index < steps.length - 1 && (
                <div className={`h-0.5 w-full mt-2 ${
                  index < currentStep ? 'bg-gradient-to-r from-purple-400 to-purple-300' : 'bg-gray-200'
                }`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Form Content */}
      <div className="min-h-96">
        {renderStep()}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8 pt-6 border-t">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-6 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        
        <div className="text-sm text-gray-500 flex items-center">
          Step {currentStep + 1} of {steps.length}
        </div>
        
        <button
          onClick={() => {
            if (currentStep === steps.length - 1) {
              generatePDF();
            } else {
              setCurrentStep(Math.min(steps.length - 1, currentStep + 1));
            }
          }}
          disabled={currentStep === steps.length - 1 && !isFormComplete()}
          className="px-6 py-2 bg-gradient-to-r from-purple-400 to-purple-300 text-white rounded-lg hover:from-purple-500 hover:to-purple-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {currentStep === steps.length - 1 ? 'Download My Strategy PDF' : 'Next'}
        </button>
      </div>
    </div>
  );
};

// Helper component for content pillars
const ContentPillarInput = ({ pillars, onAdd, onRemove }) => {
  const [newPillar, setNewPillar] = useState('');

  const handleAdd = () => {
    if (newPillar.trim()) {
      onAdd(newPillar);
      setNewPillar('');
    }
  };

  return (
    <div>
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={newPillar}
          onChange={(e) => setNewPillar(e.target.value)}
          placeholder="e.g., Beginner workouts, Nutrition tips, etc."
          className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-400"
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-gradient-to-r from-purple-400 to-purple-300 text-white rounded hover:from-purple-500 hover:to-purple-400 transition-all duration-200"
        >
          <Plus size={16} />
        </button>
      </div>
      <div className="space-y-2">
        {pillars.map((pillar, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
            <span>{pillar}</span>
            <button
              onClick={() => onRemove(index)}
              className="text-purple-500 hover:text-purple-700"
            >
              <Trash2 size={16} /></button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper component for goals
const GoalInput = ({ goals, onAdd, onRemove }) => {
  const [newGoal, setNewGoal] = useState('');

  const handleAdd = () => {
    if (newGoal.trim()) {
      onAdd(newGoal);
      setNewGoal('');
    }
  };

  return (
    <div>
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          placeholder="e.g., Reach 1,000 subscribers in 6 months"
          className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-400"
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-gradient-to-r from-purple-400 to-purple-300 text-white rounded hover:from-purple-500 hover:to-purple-400 transition-all duration-200"
        >
          <Plus size={16} />
        </button>
      </div>
      <div className="space-y-2">
        {goals.map((goal, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
            <span>{goal}</span>
            <button
              onClick={() => onRemove(index)}
              className="text-purple-500 hover:text-purple-700"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeStrategyPlanner;
