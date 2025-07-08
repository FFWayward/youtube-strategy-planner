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
    { title: "Goals & Review", icon: CheckCircle2 },
    { title: "Your Action Plan", icon: Target }
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

  const generateActionPlan = () => {
    let actionPlan = [];

    // Universal steps everyone gets
    actionPlan.push({
      title: "🚀 First Things First (Start Here!)",
      items: [
        "Go to YouTube.com and create your channel with your planned name",
        "Add channel art (1280x720px) - use Canva.com for free templates",
        "Write your About section using your strategy description",
        "Add your social media links from your strategy",
        "Create a 60-90 second channel trailer introducing yourself"
      ]
    });

    // Upload frequency specific advice - ALL OPTIONS
    if (formData.uploadSchedule) {
      const scheduleAdvice = {
        "Daily": {
          title: "📅 Daily Posting Strategy",
          items: [
            "⚠️ Daily posting requires 2-4 hours per day commitment",
            "Batch film 7 videos every Sunday (6-8 hour session)",
            "Keep videos short (5-10 minutes max) for sustainability",
            "Use Loom.com for quick screen recordings and tutorials",
            "Prepare 14 days of content before launching",
            "Set up automated posting in YouTube Studio",
            "Create content templates to speed up production",
            "Consider repurposing one piece of content into multiple formats"
          ]
        },
        "3x per week": {
          title: "📅 3x Per Week Strategy", 
          items: [
            "Post Monday, Wednesday, Friday at consistent times",
            "Film all 3 videos on Sunday (4-6 hour session)",
            "Content mix: 1 tutorial, 1 behind-scenes, 1 main topic",
            "Prepare 6 videos before launching",
            "Use Buffer.com for social media promotion scheduling",
            "Create themed days (e.g., Tutorial Monday, Personal Wednesday, Tips Friday)",
            "Cross-promote each video on the other posting days"
          ]
        },
        "2x per week": {
          title: "📅 2x Per Week Strategy",
          items: [
            "Post Tuesday and Friday (optimal engagement days)",
            "Batch film both videos in one session",
            "Alternate between educational and entertaining content",
            "Prepare 4 videos before launching",
            "Time commitment: 3-4 hours weekly",
            "Use Tuesday for 'how-to' content, Friday for 'fun' content",
            "Promote upcoming Friday video in Tuesday video's end screen"
          ]
        },
        "Weekly": {
          title: "📅 Weekly Posting Strategy",
          items: [
            "Post every Thursday (highest engagement day)",
            "Create longer-form content (15-25 minutes)",
            "Deep-dive into topics from your niche",
            "Prepare 2-3 videos before launching",
            "Promote heavily since you only get one shot per week",
            "Use Instagram Stories to tease upcoming video throughout the week",
            "Create email list to notify subscribers 24 hours before upload"
          ]
        },
        "Bi-weekly": {
          title: "📅 Bi-weekly Strategy",
          items: [
            "Post every other Tuesday for consistency",
            "Create premium, highly-researched content (20-30 minutes)",
            "Focus heavily on SEO optimization for each video",
            "Cross-promote on all other platforms extensively",
            "Build email list to notify subscribers of new videos",
            "Create companion blog posts for each video",
            "Use the off-week to plan and research your next video thoroughly"
          ]
        }
      };
      
      if (scheduleAdvice[formData.uploadSchedule]) {
        actionPlan.push(scheduleAdvice[formData.uploadSchedule]);
      }
    }

    // Category-specific advice - ALL 15 CATEGORIES
    if (formData.category) {
      const categoryAdvice = {
        "Comedy": {
          title: "😂 Comedy Category Action Plan",
          items: [
            "Study what's trending on TikTok and Instagram Reels for inspiration",
            "Create original skits and characters for your channel",
            "Use trending memes and audio (with your unique twist)",
            "Collaborate with other comedy creators for crossover content",
            "Post between 7-9 PM EST when people want to unwind and laugh",
            "Keep videos under 10 minutes - comedy works best in short bursts",
            "Develop catchphrases and running jokes for your brand"
          ]
        },
        "Autos and Vehicles": {
          title: "🚗 Autos and Vehicles Action Plan",
          items: [
            "Create car review videos with detailed walkarounds",
            "Film DIY maintenance tutorials with close-up shots",
            "Cover car shows and automotive events in your area",
            "Partner with local dealerships and auto parts stores",
            "Post on weekends when car enthusiasts have free time",
            "Use drone footage for dramatic car shots (if legally permitted)",
            "Create 'buyer's guide' content for different price ranges"
          ]
        },
        "Entertainment": {
          title: "🎬 Entertainment Category Action Plan",
          items: [
            "Study trending formats on VidIQ.com or TubeBuddy.com",
            "Create reaction videos to popular content in your niche",
            "Use trending audio from YouTube Audio Library",
            "Post between 6-9 PM EST for maximum engagement",
            "Collaborate with other entertainment creators",
            "Cover red carpet events, award shows, and premieres",
            "Create 'Top 10' style list videos about entertainment topics"
          ]
        },
        "Education": {
          title: "📚 Education Category Action Plan",
          items: [
            "Create course-style playlists with sequential lessons",
            "Use keyword research with Ahrefs.com or SEMrush.com",
            "Include timestamps in video descriptions for easy navigation",
            "Create companion PDFs for download (lead magnets)",
            "Post between 2-4 PM EST when people seek learning content",
            "Partner with schools or educational institutions",
            "Create quiz videos to test viewer knowledge"
          ]
        },
        "Film & Animation": {
          title: "🎨 Film & Animation Action Plan",
          items: [
            "Showcase your animation process in time-lapse videos",
            "Create tutorials on animation software (Blender, After Effects)",
            "Review and analyze popular animated films and shows",
            "Collaborate with voice actors for animated shorts",
            "Post your finished animations with behind-the-scenes content",
            "Use Patreon for funding longer animation projects",
            "Create character design videos showing your creative process"
          ]
        },
        "How-to and Style": {
          title: "✨ How-to and Style Action Plan",
          items: [
            "Film step-by-step tutorials with close-up shots",
            "Create 'Before & After' thumbnails for maximum click-through",
            "List all materials needed in video description with links",
            "Partner with brands for product placement opportunities",
            "Pin shopping links in comments section",
            "Create seasonal content (holiday decorating, summer fashion)",
            "Film 'Get Ready With Me' style videos for personal touch"
          ]
        },
        "Gaming": {
          title: "🎮 Gaming Category Action Plan",
          items: [
            "Stream on YouTube Live to build community engagement",
            "Create guides for popular games in your specific niche",
            "React to game trailers, updates, and gaming news",
            "Join gaming Discord communities for networking",
            "Post between 7-11 PM EST when gamers are most active",
            "Create tier lists and ranking videos for games",
            "Partner with game developers for early access content"
          ]
        },
        "Music": {
          title: "🎵 Music Category Action Plan",
          items: [
            "Upload original compositions and covers regularly",
            "Create music production tutorials showing your process",
            "React to and analyze popular songs in your genre",
            "Collaborate with other musicians for duets and features",
            "Use YouTube's music promotion tools and premieres",
            "Create lyric videos and music videos for your originals",
            "Share the story behind your songs in separate videos"
          ]
        },
        "Nonprofits and Activism": {
          title: "🤝 Nonprofits and Activism Action Plan",
          items: [
            "Share stories of people impacted by your cause",
            "Create educational content about issues you're addressing",
            "Film volunteer events and behind-the-scenes nonprofit work",
            "Interview experts and thought leaders in your field",
            "Use calls-to-action for donations and volunteer signups",
            "Partner with other nonprofits for collaborative content",
            "Create 'how to get involved' guide videos for your community"
          ]
        },
        "News and Politics": {
          title: "📰 News and Politics Action Plan",
          items: [
            "Create daily or weekly news roundup videos",
            "Fact-check popular claims with credible sources",
            "Interview local politicians and community leaders",
            "Break down complex political topics for general audiences",
            "Stay neutral and present multiple perspectives",
            "Post during lunch hours (12-2 PM) when people check news",
            "Create election guides and voting information content"
          ]
        },
        "Pets and Animals": {
          title: "🐾 Pets and Animals Action Plan",
          items: [
            "Film daily life with your pets for regular content",
            "Create pet care tutorials and training videos",
            "Partner with local animal shelters for adoption content",
            "Review pet products and create 'best of' lists",
            "Share rescue stories and transformation videos",
            "Film visits to zoos, aquariums, and wildlife centers",
            "Create educational content about different animal species"
          ]
        },
        "People and Blogs": {
          title: "👥 People and Blogs Action Plan",
          items: [
            "Share personal stories and life experiences authentically",
            "Create 'Day in My Life' vlogs showing your routine",
            "Interview interesting people in your community",
            "Share opinions and commentary on current trends",
            "Create Q&A videos responding to subscriber questions",
            "Film travel vlogs when visiting new places",
            "Share life advice and lessons learned from your experiences"
          ]
        },
        "Science and Technology": {
          title: "🔬 Science and Technology Action Plan",
          items: [
            "Explain complex concepts in simple, visual ways",
            "Review and test new technology products",
            "Create experiment videos with clear scientific method",
            "Interview scientists and technology experts",
            "Cover breaking news in science and tech",
            "Create educational series on specific scientific topics",
            "Partner with museums and science centers for content"
          ]
        },
        "Travel and Events": {
          title: "✈️ Travel and Events Action Plan",
          items: [
            "Create destination guides with budget breakdowns",
            "Film immersive travel experiences and local culture",
            "Cover local events, festivals, and celebrations",
            "Create packing guides and travel tips videos",
            "Partner with tourism boards and travel companies",
            "Film food tours and local cuisine experiences",
            "Create 'hidden gems' videos for popular destinations"
          ]
        },
        "Sports": {
          title: "⚽ Sports Category Action Plan",
          items: [
            "Create analysis videos of games and player performance",
            "Film training tutorials and workout routines",
            "Cover local sports events and interview athletes",
            "Create prediction videos before major games/seasons",
            "Partner with sports equipment brands for reviews",
            "Film 'day in the life' content following athletes",
            "Create sports history and trivia content for fans"
          ]
        }
      };

      if (categoryAdvice[formData.category]) {
        actionPlan.push(categoryAdvice[formData.category]);
      }
    }

    // Video type specific advice - HANDLE MULTIPLE SELECTIONS
    if (formData.videoTypes.length > 0) {
      let videoAdvice = {
        title: "🎥 Your Video Types Action Plan",
        items: []
      };

      // Add advice for each selected video type
      formData.videoTypes.forEach(type => {
        switch(type) {
          case "Vlogs":
            videoAdvice.items.push("📝 Vlogs: Plan your week with interesting activities, invest in good audio (Rode VideoMic Me $79), create consistent intro/outro format, keep energy high with quick cuts");
            break;
          case "Interviews":
            videoAdvice.items.push("🎤 Interviews: Use Riverside.fm for remote recording, prepare 5-7 questions in advance, reach out to experts via LinkedIn, cross-promote on guest's social media");
            break;
          case "Webinars":
            videoAdvice.items.push("💻 Webinars: Host Q&A sessions with your audience, create product demos, use StreamYard or Zoom for recording, promote heavily beforehand for attendance");
            break;
          case "Events":
            videoAdvice.items.push("🎪 Events: Film behind-the-scenes content, interview attendees, create recap videos, get permission to film beforehand, bring portable lighting equipment");
            break;
          case "Presentations":
            videoAdvice.items.push("📊 Presentations: Create slide decks with engaging visuals, practice beforehand, record in high quality, break longer presentations into multiple videos");
            break;
          case "Tutorials":
            videoAdvice.items.push("🛠️ Tutorials: Research common questions on AnswerThePublic.com, use OBS Studio for screen recording, include timestamps in descriptions, create step-by-step outlines");
            break;
          case "Product Reviews":
            videoAdvice.items.push("⭐ Product Reviews: Join Amazon Associates for affiliate income, create honest pros/cons format, show products in actual use, always disclose partnerships legally");
            break;
          case "Q&A Sessions":
            videoAdvice.items.push("❓ Q&A Sessions: Collect questions from comments and social media, group similar questions together, create engaging thumbnails with question previews");
            break;
          case "Behind the Scenes":
            videoAdvice.items.push("🎬 Behind the Scenes: Show your creative process, film your workspace/setup, share mistakes and learning moments, make viewers feel like insiders");
            break;
        }
      });

      if (videoAdvice.items.length > 0) {
        actionPlan.push(videoAdvice);
      }
    }

    // Monetization specific advice - HANDLE MULTIPLE SELECTIONS
    if (formData.monetizationMethods.length > 0) {
      let monetizationAdvice = {
        title: "💰 Your Monetization Action Plan",
        items: []
      };

      // Add specific advice for each selected monetization method
      formData.monetizationMethods.forEach(method => {
        switch(method) {
          case "YouTube Partner Program":
            monetizationAdvice.items.push("💵 YouTube Partner Program: Need 1,000 subscribers + 4,000 watch hours. Apply in YouTube Studio → Monetization. Expected: $1-5 per 1,000 views. Focus on watch time optimization.");
            break;
          case "Affiliate Marketing":
            monetizationAdvice.items.push("🔗 Affiliate Marketing: Sign up for Amazon Associates (easiest start), ClickBank for digital products, only promote products you actually use, expected 5-10% commission on sales.");
            break;
          case "Merchandise Sales":
            monetizationAdvice.items.push("👕 Merchandise: Use Teespring.com (integrates with YouTube), start with 2-3 simple designs, create designs related to your niche/catchphrases, promote in videos and pin links.");
            break;
          case "Sponsored Content":
            monetizationAdvice.items.push("🤝 Sponsored Content: Build media kit with channel stats, join AspireIQ.com or Upfluence.com, set rates at $100-500 per 10k views, always disclose 'This video is sponsored by...'");
            break;
          case "Course Sales":
            monetizationAdvice.items.push("📚 Course Sales: Use Teachable.com or Thinkific.com, create mini-course (4-6 lessons) to start, price at $97-297 for first course, promote with free mini-lessons on YouTube.");
            break;
          case "Consulting Services":
            monetizationAdvice.items.push("🧠 Consulting: Create service packages based on your expertise, use Calendly.com for booking, start at $100-200/hour, showcase results in case study videos.");
            break;
          case "Patreon/Memberships":
            monetizationAdvice.items.push("🌟 Patreon/Memberships: Set up YouTube Channel Memberships or Patreon.com, offer exclusive content tiers ($5, $15, $25/month), create behind-scenes content for supporters.");
            break;
          case "Product Sales":
            monetizationAdvice.items.push("📦 Product Sales: Create digital products (PDFs, templates, presets), use Gumroad.com for easy selling, price digital products $19-97, promote in video descriptions.");
            break;
        }
      });

      if (monetizationAdvice.items.length > 0) {
        actionPlan.push(monetizationAdvice);
      }
    }

    // Essential tools section
    actionPlan.push({
      title: "🛠️ Essential Tools You Need",
      items: [
        "Video Editing: DaVinci Resolve (free) or Adobe Premiere Pro ($22.99/month)",
        "Thumbnails: Canva.com (free) or Canva Pro ($14.99/month)", 
        "SEO Research: TubeBuddy.com (free plan) or VidIQ.com ($39/month)",
        "Screen Recording: OBS Studio (completely free)",
        "Audio Enhancement: Audacity (free) for post-production cleanup",
        "Analytics: YouTube Studio (built-in) + Social Blade for competitor research"
      ]
    });

    // 30-day launch plan
    actionPlan.push({
      title: "📊 Your 30-Day Launch Plan",
      items: [
        "Week 1: Set up channel completely, film first 3-4 videos, design thumbnail templates",
        "Week 2: Edit all videos, write SEO-optimized descriptions, schedule first week of posts",
        "Week 3: Pre-launch marketing on personal social media, join relevant communities, build email list",
        "Week 4: Launch with fanfare, respond to every comment within 2 hours, share across all platforms",
        "Month 1 Goals: 100 subscribers, 1,000 views, 50% average view duration, 5% click-through rate on thumbnails"
      ]
    });

    // AI prompts section
    actionPlan.push({
      title: "🤖 AI-Powered Next Steps",
      items: [
        "Upload your complete PDF to Claude.ai or ChatGPT and ask these questions:",
        "\"Create a 30-day content calendar with specific video titles based on my YouTube strategy\"",
        "\"Generate 20 engaging video titles for my " + (formData.nicheTopic || "niche") + " that would appeal to " + (formData.targetAudience.age || "my target audience") + "\"", 
        "\"What trending keywords should I target for SEO in my niche right now?\"",
        "\"Create a detailed filming schedule that works with " + (formData.uploadSchedule || "my posting schedule") + " and minimal equipment\"",
        "\"Write email templates for reaching out to brands for sponsorship opportunities in my niche\"",
        "\"Design a social media strategy to promote my YouTube channel across Instagram, TikTok, and Twitter\""
      ]
    });

    return actionPlan;
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
      
      // Clean the title text to avoid encoding issues
      const cleanTitle = title.replace(/[^\x00-\x7F]/g, "");
      doc.text(cleanTitle, margin, yPosition);
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
    const cleanItem = String(item).replace(/[^\x00-\x7F]/g, "").replace(/"/g, "");
    const lines = doc.splitTextToSize(`• ${cleanItem}`, pageWidth - 2 * margin - 10);
    lines.forEach(line => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 40;
      }
      doc.text(line, margin + 5, yPosition);
      yPosition += 6;
    });
  });
} else {
        const cleanContent = String(content || 'Not specified').replace(/[^\x00-\x7F]/g, "");
        const lines = doc.splitTextToSize(cleanContent, pageWidth - 2 * margin);
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
    addSection('My Why', formData.channelWhy);
    addSection('Target Audience', `Age: ${formData.targetAudience.age}\nGender: ${formData.targetAudience.gender}\nLocation: ${formData.targetAudience.location}\nProblems they face: ${formData.targetAudience.problems}`);
    addSection('Niche & Category', `Category: ${formData.category}\nSpecific Niche: ${formData.nicheTopic}\nSkills: ${formData.skills}`);
    addSection('Channel Details', `Name Ideas: ${formData.channelName}\nDescription: ${formData.channelDescription}\nUpload Schedule: ${formData.uploadSchedule}`);
    addSection('Social Media Links', `Instagram: ${formData.socialLinks.instagram}\nTwitter: ${formData.socialLinks.twitter}\nFacebook: ${formData.socialLinks.facebook}\nWebsite: ${formData.socialLinks.website}`);
    addSection('Content Types', formData.videoTypes, true);
    addSection('Content Pillars', formData.contentPillars, true);
    addSection('Monetization Methods', formData.monetizationMethods, true);
    addSection('Goals & Milestones', formData.goals, true);
    addSection('Competition Analysis', formData.competition);

   // Add action plan sections to PDF
const actionPlan = generateActionPlan();
actionPlan.forEach(section => {
  addSection(section.title, section.items, true);
});

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
              <label className="block text-sm font-semibold text-purple-600 mb-2">
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
                <label className="block text-sm font-semibold text-purple-600 mb-2">Target Audience Age Range</label>
                <input
                  type="text"
                  className="w-full p-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:bg-white text-gray-700 placeholder-purple-400"
                  placeholder="e.g., 25-35"
                  value={formData.targetAudience.age}
                  onChange={(e) => updateNestedData('targetAudience', 'age', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-purple-600 mb-2">Primary Gender</label>
                <select
                  className="w-full p-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:bg-white text-gray-700 placeholder-purple-400"
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
              <label className="block text-sm font-semibold text-purple-600 mb-2">Target Location</label>
              <input
                type="text"
                className="w-full p-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:bg-white text-gray-700 placeholder-purple-400"
                placeholder="e.g., United States, Global, English-speaking countries"
                value={formData.targetAudience.location}
                onChange={(e) => updateNestedData('targetAudience', 'location', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-purple-600 mb-2">What problems does your audience face?</label>
              <textarea
                className="w-full p-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:bg-white text-gray-700 placeholder-purple-400"
                rows="3"
                placeholder="Describe the main challenges your target audience faces..."
                value={formData.targetAudience.problems}
                onChange={(e) => updateNestedData('targetAudience', 'problems', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-purple-600 mb-2">Upload Schedule</label>
              <select
                className="w-full p-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:bg-white text-gray-700 placeholder-purple-400"
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
              <label className="block text-sm font-semibold text-purple-600 mb-2">What are you good at? List your skills and expertise</label>
              <textarea
                className="w-full p-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:bg-white text-gray-700 placeholder-purple-400"
                rows="3"
                placeholder="List your skills, hobbies, professional expertise..."
                value={formData.skills}
                onChange={(e) => updateFormData('skills', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-purple-600 mb-2">YouTube Category</label>
              <select
                className="w-full p-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:bg-white text-gray-700 placeholder-purple-400"
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
              <label className="block text-sm font-semibold text-purple-600 mb-2">Specific Niche Topic</label>
              <input
                type="text"
                className="w-full p-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:bg-white text-gray-700 placeholder-purple-400"
                placeholder="e.g., Home workouts for busy moms, Tech reviews for seniors, etc."
                value={formData.nicheTopic}
                onChange={(e) => updateFormData('nicheTopic', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-purple-600 mb-2">Competition Analysis</label>
              <textarea
                className="w-full p-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:bg-white text-gray-700 placeholder-purple-400"
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
              <label className="block text-sm font-semibold text-purple-600 mb-2">Channel Name Ideas</label>
              <input
                type="text"
                className="w-full p-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:bg-white text-gray-700 placeholder-purple-400"
                placeholder="Keep it short, memorable, and related to your niche"
                value={formData.channelName}
                onChange={(e) => updateFormData('channelName', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-purple-600 mb-2">Channel Description (About Section)</label>
              <textarea
                className="w-full p-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:bg-white text-gray-700 placeholder-purple-400"
                rows="4"
                placeholder="Describe what your channel is about and include relevant keywords..."
                value={formData.channelDescription}
                onChange={(e) => updateFormData('channelDescription', e.target.value)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-purple-600 mb-2">Instagram Handle</label>
                <input
                  type="text"
                  className="w-full p-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:bg-white text-gray-700 placeholder-purple-400"
                  placeholder="@yourusername"
                  value={formData.socialLinks.instagram}
                  onChange={(e) => updateNestedData('socialLinks', 'instagram', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-purple-600 mb-2">X (Twitter) Handle</label>
                <input
                  type="text"
                  className="w-full p-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:bg-white text-gray-700 placeholder-purple-400"
                  placeholder="@yourusername"
                  value={formData.socialLinks.twitter}
                  onChange={(e) => updateNestedData('socialLinks', 'twitter', e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-purple-600 mb-2">Facebook Page</label>
                <input
                  type="text"
                  className="w-full p-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:bg-white text-gray-700 placeholder-purple-400"
                  placeholder="facebook.com/yourpage"
                  value={formData.socialLinks.facebook}
                  onChange={(e) => updateNestedData('socialLinks', 'facebook', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-purple-600 mb-2">Website URL</label>
                <input
                  type="text"
                  className="w-full p-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:bg-white text-gray-700 placeholder-purple-400"
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
              <label className="block text-sm font-semibold text-purple-600 mb-2">Video Types You'll Create</label>
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
                      className="text-purple-500 focus:ring-purple-500 border-purple-300 rounded"
                    />
                    <span className="text-sm text-gray-800">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-purple-600 mb-2">Content Pillars (3-5 main topics you'll cover)</label>
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
              <label className="block text-sm font-semibold text-purple-600 mb-2">Select your monetization methods</label>
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
                      className="text-purple-500 focus:ring-purple-500 border-purple-300 rounded"
                    />
                    <span className="text-gray-800">{method}</span>
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
              <label className="block text-sm font-semibold text-purple-600 mb-2">Set Your Goals</label>
              <GoalInput 
                goals={formData.goals}
                onAdd={(goal) => addToArray('goals', goal)}
                onRemove={(index) => removeFromArray('goals', index)}
              />
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">📋 Your Channel Strategy Summary</h3>
           <div className="space-y-3 text-sm text-gray-800">
  <div><strong className="text-blue-800">Niche:</strong> {formData.nicheTopic || 'Not specified'}</div>
  <div><strong className="text-blue-800">Target Audience:</strong> {formData.targetAudience.age} year olds, {formData.targetAudience.gender}, {formData.targetAudience.location}</div>
  <div><strong className="text-blue-800">Upload Schedule:</strong> {formData.uploadSchedule || 'Not specified'}</div>
  <div><strong className="text-blue-800">Content Types:</strong> {formData.videoTypes.join(', ') || 'None selected'}</div>
  <div><strong className="text-blue-800">Monetization:</strong> {formData.monetizationMethods.join(', ') || 'None selected'}</div>
            </div>
              </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">🚀 What's Next?</h3>
              <p className="text-sm text-purple-700">Ready to see your personalized action plan? Click "Next" to get step-by-step instructions tailored to YOUR strategy!</p>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Personalized Action Plan</h2>
            <p className="text-gray-600">Based on your strategy, here's exactly what to do next:</p>
            
            <div className="space-y-6">
              {generateActionPlan().map((section, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-600 mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-400 to-purple-300 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">🎯 Your Success Timeline</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold">Month 1 Goals:</h4>
                  <ul className="mt-2 space-y-1">
                    <li>• 100 subscribers</li>
                    <li>• 1,000 total views</li>
                    <li>• Consistent posting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Month 3 Goals:</h4>
                  <ul className="mt-2 space-y-1">
                    <li>• 500 subscribers</li>
                    <li>• 10,000 total views</li>
                    <li>• First $100 revenue</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Month 6 Goals:</h4>
                  <ul className="mt-2 space-y-1">
                    <li>• 1,000 subscribers</li>
                    <li>• YouTube Partner Program</li>
                    <li>• $500/month revenue</li>
                  </ul>
                </div>
              </div>
            </div>

            {isFormComplete() && (
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Download className="text-green-600" size={20} />
                  <div>
                    <h3 className="font-semibold text-green-800">Ready to Launch!</h3>
                    <p className="text-sm text-green-600">Download your complete strategy + action plan PDF and start building your YouTube empire!</p>
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
          {currentStep === steps.length - 1 ? 'Download Complete Strategy + Action Plan PDF' : 'Next'}
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
          className="flex-1 p-2 bg-purple-50 border border-purple-200 rounded focus:ring-2 focus:ring-purple-400 focus:bg-white text-gray-700 placeholder-purple-400"
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
              <Trash2 size={16} />
            </button>
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
          className="flex-1 p-2 bg-purple-50 border border-purple-200 rounded focus:ring-2 focus:ring-purple-400 focus:bg-white text-gray-700 placeholder-purple-400"
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
