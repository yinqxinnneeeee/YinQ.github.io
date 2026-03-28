// 配置信息
const CONFIG = {
    username: '贾春俏',
    loginPassword: 'Jcq6889',
    worksPassword: 'Jcq20060608'
};

// 数据存储
let websiteData = JSON.parse(localStorage.getItem('websiteData')) || {
    logo: 'FORA',
    heroTitle: '个人介绍',
    heroDescription: '欢迎来到我的个人作品集，这里展示了我在美术、音乐、游戏、小说、剧本、漫画等领域的创作。',
    timelineTitle: '创作年限',
    footerText: '© 2026 个人作品集',
    publicAccess: false
};

// 主题数据
let themeData = {
    backgroundType: 'color',
    backgroundColor: '#f5f5f5',
    gradientColor1: '#4facfe',
    gradientColor2: '#00f2fe',
    backgroundImage: null,
    emojis: [],
    emojiEffect: 'none'
};

// 尝试从localStorage加载主题数据
try {
    const savedTheme = localStorage.getItem('themeData');
    if (savedTheme) {
        themeData = JSON.parse(savedTheme);
        console.log('Loaded theme from localStorage:', themeData);
    }
} catch (error) {
    console.error('Error loading theme from localStorage:', error);
}

// 时间轴数据
let timelineData = JSON.parse(localStorage.getItem('timelineData')) || [
    { year: '2020', event: '开始创作生涯' },
    { year: '2021', event: '发布第一幅美术作品' },
    { year: '2022', event: '完成第一个游戏项目' },
    { year: '2023', event: '发布第一部小说' },
    { year: '2024', event: '开始剧本创作' },
    { year: '2025', event: '涉足漫画领域' },
    { year: '2026', event: '创建个人作品集网站' }
];

// 作品数据
let worksData = [
    {
        id: 1,
        title: '油画作品1',
        category: '美术',
        description: '这是我的第一幅油画作品，创作于2021年。',
        images: [],
        audios: []
    },
    {
        id: 2,
        title: '游戏Demo',
        category: '游戏',
        description: '这是我开发的第一个游戏Demo，使用Unity引擎。',
        images: [],
        audios: []
    },
    {
        id: 3,
        title: '短篇小说',
        category: '小说',
        description: '这是我的第一部短篇小说，讲述了一个关于梦想的故事。',
        images: [],
        audios: []
    }
];

// 尝试从localStorage加载作品数据
try {
    const savedWorks = localStorage.getItem('works');
    if (savedWorks) {
        worksData = JSON.parse(savedWorks);
        console.log('Loaded works from localStorage:', worksData);
    }
} catch (error) {
    console.error('Error loading works from localStorage:', error);
    // 如果加载失败，使用默认数据
    worksData = [
        {
            id: 1,
            title: '油画作品1',
            category: '美术',
            description: '这是我的第一幅油画作品，创作于2021年。',
            images: [],
            audios: []
        },
        {
            id: 2,
            title: '游戏Demo',
            category: '游戏',
            description: '这是我开发的第一个游戏Demo，使用Unity引擎。',
            images: [],
            audios: []
        },
        {
            id: 3,
            title: '短篇小说',
            category: '小说',
            description: '这是我的第一部短篇小说，讲述了一个关于梦想的故事。',
            images: [],
            audios: []
        }
    ];
}

// 当前选中的作品
let currentWork = null;

// DOM元素
const loginPage = document.getElementById('loginPage');
const mainPage = document.getElementById('mainPage');
const workDetailPage = document.getElementById('workDetailPage');
const usernameInput = document.getElementById('username');
const loginPasswordInput = document.getElementById('loginPassword');
const loginSubmit = document.getElementById('loginSubmit');
const logoText = document.getElementById('logoText');
const detailLogoText = document.getElementById('detailLogoText');
const heroTitle = document.getElementById('heroTitle');
const heroDescription = document.getElementById('heroDescription');
const timelineTitle = document.getElementById('timelineTitle');
const timelineContainer = document.getElementById('timelineContainer');
const worksContainer = document.getElementById('worksContainer');
const footerText = document.getElementById('footerText');
const detailFooterText = document.getElementById('detailFooterText');
const publicAccessCheckbox = document.getElementById('publicAccess');
const editTextBtn = document.getElementById('editTextBtn');
const editModal = document.getElementById('editModal');
const editLogo = document.getElementById('editLogo');
const editHeroTitle = document.getElementById('editHeroTitle');
const editHeroDescription = document.getElementById('editHeroDescription');
const editTimelineTitle = document.getElementById('editTimelineTitle');
const editFooter = document.getElementById('editFooter');
const saveEdit = document.getElementById('saveEdit');
const cancelEdit = document.getElementById('cancelEdit');
const worksPasswordInput = document.getElementById('worksPassword');
const worksLoginBtn = document.getElementById('worksLoginBtn');
const adminContent = document.getElementById('adminContent');
const addWorkForm = document.getElementById('addWorkForm');
const backBtn = document.getElementById('backBtn');
const detailCategory = document.getElementById('detailCategory');
const detailTitle = document.getElementById('detailTitle');
const detailDescription = document.getElementById('detailDescription');
const detailMedia = document.getElementById('detailMedia');
const editWorkBtn = document.getElementById('editWorkBtn');
const editWorkModal = document.getElementById('editWorkModal');
const editWorkTitle = document.getElementById('editWorkTitle');
const editWorkCategory = document.getElementById('editWorkCategory');
const editWorkDescription = document.getElementById('editWorkDescription');
const editWorkImages = document.getElementById('editWorkImages');
const editWorkAudios = document.getElementById('editWorkAudios');
const saveWorkEdit = document.getElementById('saveWorkEdit');
const cancelWorkEdit = document.getElementById('cancelWorkEdit');
const toggleAdminPanel = document.getElementById('toggleAdminPanel');
const adminPanelContent = document.getElementById('adminPanelContent');

// 主题设置相关DOM元素
const editTimelineBtn = document.getElementById('editTimelineBtn');
const themeSettingsBtn = document.getElementById('themeSettingsBtn');
const editTimelineModal = document.getElementById('editTimelineModal');
const timelineItems = document.getElementById('timelineItems');
const addTimelineItem = document.getElementById('addTimelineItem');
const saveTimeline = document.getElementById('saveTimeline');
const cancelTimeline = document.getElementById('cancelTimeline');
const themeSettingsModal = document.getElementById('themeSettingsModal');
const backgroundType = document.getElementById('backgroundType');
const colorOption = document.getElementById('colorOption');
const gradientOption = document.getElementById('gradientOption');
const imageOption = document.getElementById('imageOption');
const backgroundColor = document.getElementById('backgroundColor');
const gradientColor1 = document.getElementById('gradientColor1');
const gradientColor2 = document.getElementById('gradientColor2');
const backgroundImage = document.getElementById('backgroundImage');
const emojiInput = document.getElementById('emojiInput');
const addEmoji = document.getElementById('addEmoji');
const emojiEffect = document.getElementById('emojiEffect');
const saveTheme = document.getElementById('saveTheme');
const cancelTheme = document.getElementById('cancelTheme');

// 初始化登录功能
function initLogin() {
    // 检查是否开放访问
    if (websiteData.publicAccess) {
        showMainPage();
        return;
    }
    
    loginSubmit.addEventListener('click', () => {
        const username = usernameInput.value;
        const password = loginPasswordInput.value;
        
        if (username === CONFIG.username && password === CONFIG.loginPassword) {
            showMainPage();
        } else {
            alert('用户名或密码错误！');
        }
    });
}

// 显示主页面
function showMainPage() {
    loginPage.style.display = 'none';
    workDetailPage.style.display = 'none';
    mainPage.style.display = 'block';
    updateWebsiteContent();
    // 重新应用主题
    applyTheme();
}

// 显示作品详情页面
function showWorkDetail(work) {
    currentWork = work;
    mainPage.style.display = 'none';
    workDetailPage.style.display = 'block';
    
    // 更新详情页面内容
    detailLogoText.textContent = websiteData.logo;
    detailFooterText.textContent = websiteData.footerText;
    detailCategory.textContent = work.category;
    detailTitle.textContent = work.title;
    detailDescription.textContent = work.description;
    
    // 渲染媒体内容
    detailMedia.innerHTML = '';
    
    // 渲染图片
    if (work.images && work.images.length > 0) {
        work.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = work.title;
            detailMedia.appendChild(img);
        });
    }
    
    // 渲染音频
    if (work.audios && work.audios.length > 0) {
        work.audios.forEach((audio, index) => {
            const audioElement = document.createElement('audio');
            audioElement.controls = true;
            audioElement.src = audio;
            audioElement.innerHTML = `您的浏览器不支持音频播放 ${index + 1}`;
            detailMedia.appendChild(audioElement);
        });
    }
    
    // 重新应用主题
    applyTheme();
}

// 更新网站内容
function updateWebsiteContent() {
    logoText.textContent = websiteData.logo;
    heroTitle.textContent = websiteData.heroTitle;
    heroDescription.textContent = websiteData.heroDescription;
    timelineTitle.textContent = websiteData.timelineTitle;
    footerText.textContent = websiteData.footerText;
    publicAccessCheckbox.checked = websiteData.publicAccess;
    initTimeline();
    renderWorks();
}

// 初始化时间轴
function initTimeline() {
    timelineContainer.innerHTML = '';
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <h3>${item.year}</h3>
            <p>${item.event}</p>
        `;
        timelineContainer.appendChild(timelineItem);
    });
}

// 渲染作品
function renderWorks(filter = 'all') {
    worksContainer.innerHTML = '';
    
    const filteredWorks = filter === 'all' ? worksData : worksData.filter(work => work.category === filter);
    
    filteredWorks.forEach(work => {
        const workItem = document.createElement('div');
        workItem.className = 'work-item';
        
        let content = `
            <span class="category">${work.category}</span>
            <h3>${work.title}</h3>
            <p>${work.description}</p>
        `;
        
        // 渲染图片
        if (work.images && work.images.length > 0) {
            content += '<div class="media-gallery">';
            work.images.forEach(image => {
                content += `<img src="${image}" alt="${work.title}">`;
            });
            content += '</div>';
        }
        
        // 渲染音频
        if (work.audios && work.audios.length > 0) {
            content += '<div class="audio-list">';
            work.audios.forEach((audio, index) => {
                content += `<audio controls src="${audio}">您的浏览器不支持音频播放 ${index + 1}</audio>`;
            });
            content += '</div>';
        }
        
        workItem.innerHTML = content;
        
        // 添加点击事件
        workItem.addEventListener('click', () => {
            showWorkDetail(work);
        });
        
        worksContainer.appendChild(workItem);
    });
}

// 初始化标签切换
function initTags() {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            renderWorks(tag.dataset.tag);
        });
    });
}

// 初始化文字编辑功能
function initTextEdit() {
    editTextBtn.addEventListener('click', () => {
        editLogo.value = websiteData.logo;
        editHeroTitle.value = websiteData.heroTitle;
        editHeroDescription.value = websiteData.heroDescription;
        editTimelineTitle.value = websiteData.timelineTitle;
        editFooter.value = websiteData.footerText;
        editModal.style.display = 'flex';
    });
    
    saveEdit.addEventListener('click', () => {
        websiteData.logo = editLogo.value;
        websiteData.heroTitle = editHeroTitle.value;
        websiteData.heroDescription = editHeroDescription.value;
        websiteData.timelineTitle = editTimelineTitle.value;
        websiteData.footerText = editFooter.value;
        localStorage.setItem('websiteData', JSON.stringify(websiteData));
        updateWebsiteContent();
        editModal.style.display = 'none';
    });
    
    cancelEdit.addEventListener('click', () => {
        editModal.style.display = 'none';
    });
    
    publicAccessCheckbox.addEventListener('change', () => {
        websiteData.publicAccess = publicAccessCheckbox.checked;
        localStorage.setItem('websiteData', JSON.stringify(websiteData));
    });
}

// 初始化作品管理功能
function initWorksManagement() {
    worksLoginBtn.addEventListener('click', () => {
        if (worksPasswordInput.value === CONFIG.worksPassword) {
            adminContent.style.display = 'block';
        } else {
            alert('密码错误！');
        }
    });
    
    addWorkForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('workTitle').value;
        const category = document.getElementById('workCategory').value;
        const description = document.getElementById('workDescription').value;
        const imageFiles = document.getElementById('workImages').files;
        const audioFiles = document.getElementById('workAudios').files;
        
        if (title && description) {
            const newWork = {
                id: Date.now(),
                title,
                category,
                description,
                images: [],
                audios: []
            };
            
            // 处理图片上传
            if (imageFiles.length > 0) {
                handleImageUploads(newWork, imageFiles, 0, audioFiles, false);
            } else {
                handleAudioUploads(newWork, audioFiles, 0, false);
            }
        }
    });
}

// 压缩图片
function compressImage(file, maxWidth = 800, quality = 0.7) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        img.onload = function() {
            // 计算压缩后的尺寸
            let width = img.width;
            let height = img.height;
            
            if (width > maxWidth) {
                height = (height * maxWidth) / width;
                width = maxWidth;
            }
            
            // 设置canvas尺寸
            canvas.width = width;
            canvas.height = height;
            
            // 绘制压缩后的图片
            ctx.drawImage(img, 0, 0, width, height);
            
            // 转换为DataURL
            canvas.toBlob((blob) => {
                const reader = new FileReader();
                reader.onload = function(e) {
                    resolve(e.target.result);
                };
                reader.readAsDataURL(blob);
            }, 'image/jpeg', quality);
        };
        
        img.src = URL.createObjectURL(file);
    });
}

// 处理多个图片上传
async function handleImageUploads(work, files, index, audioFiles, isEdit) {
    if (index >= files.length) {
        handleAudioUploads(work, audioFiles, 0, isEdit);
        return;
    }
    
    try {
        // 压缩图片
        const compressedImage = await compressImage(files[index]);
        work.images.push(compressedImage);
        handleImageUploads(work, files, index + 1, audioFiles, isEdit);
    } catch (error) {
        console.error('Error compressing image:', error);
        // 如果压缩失败，使用原图
        const reader = new FileReader();
        reader.onload = function(e) {
            work.images.push(e.target.result);
            handleImageUploads(work, files, index + 1, audioFiles, isEdit);
        };
        reader.readAsDataURL(files[index]);
    }
}

// 处理多个音频上传
function handleAudioUploads(work, files, index, isEdit) {
    if (index >= files.length) {
        if (isEdit) {
            updateWork(work);
        } else {
            saveWork(work);
        }
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        work.audios.push(e.target.result);
        handleAudioUploads(work, files, index + 1, isEdit);
    };
    reader.readAsDataURL(files[index]);
}

// 保存作品
function saveWork(work) {
    worksData.push(work);
    try {
        localStorage.setItem('works', JSON.stringify(worksData));
        console.log('Work saved successfully with media:', work);
    } catch (error) {
        console.error('Error saving work to localStorage:', error);
        alert('保存作品失败，请尝试减小媒体文件大小');
    }
    renderWorks(document.querySelector('.tag.active').dataset.tag);
    addWorkForm.reset();
}

// 更新作品
function updateWork(updatedWork) {
    const index = worksData.findIndex(work => work.id === updatedWork.id);
    if (index !== -1) {
        worksData[index] = updatedWork;
        try {
            localStorage.setItem('works', JSON.stringify(worksData));
            console.log('Work updated successfully with media:', updatedWork);
        } catch (error) {
            console.error('Error updating work in localStorage:', error);
            alert('更新作品失败，请尝试减小媒体文件大小');
        }
        showWorkDetail(updatedWork);
    }
}

// 初始化作品编辑功能
function initWorkEdit() {
    backBtn.addEventListener('click', showMainPage);
    
    // 添加大标题点击返回主页功能
    logoText.addEventListener('click', showMainPage);
    detailLogoText.addEventListener('click', showMainPage);
    
    // 添加管理面板折叠功能
    toggleAdminPanel.addEventListener('click', () => {
        adminPanelContent.classList.toggle('collapsed');
    });
    
    editWorkBtn.addEventListener('click', () => {
        if (!currentWork) return;
        
        editWorkTitle.value = currentWork.title;
        editWorkCategory.value = currentWork.category;
        editWorkDescription.value = currentWork.description;
        editWorkImages.value = '';
        editWorkAudios.value = '';
        
        // 显示现有图片
        const existingImages = document.getElementById('existingImages');
        existingImages.innerHTML = '';
        if (currentWork.images && currentWork.images.length > 0) {
            currentWork.images.forEach((image, index) => {
                const mediaItem = document.createElement('div');
                mediaItem.className = 'media-item';
                mediaItem.innerHTML = `
                    <img src="${image}" alt="图片 ${index + 1}">
                    <button class="remove-media" data-type="image" data-index="${index}">×</button>
                `;
                existingImages.appendChild(mediaItem);
            });
        }
        
        // 显示现有音频
        const existingAudios = document.getElementById('existingAudios');
        existingAudios.innerHTML = '';
        if (currentWork.audios && currentWork.audios.length > 0) {
            currentWork.audios.forEach((audio, index) => {
                const mediaItem = document.createElement('div');
                mediaItem.className = 'media-item';
                mediaItem.innerHTML = `
                    <audio controls src="${audio}">您的浏览器不支持音频播放 ${index + 1}</audio>
                    <button class="remove-media" data-type="audio" data-index="${index}">×</button>
                `;
                existingAudios.appendChild(mediaItem);
            });
        }
        
        // 添加删除事件
        document.querySelectorAll('.remove-media').forEach(button => {
            button.addEventListener('click', function() {
                const type = this.dataset.type;
                const index = parseInt(this.dataset.index);
                if (type === 'image') {
                    currentWork.images.splice(index, 1);
                } else if (type === 'audio') {
                    currentWork.audios.splice(index, 1);
                }
                // 重新显示现有媒体
                editWorkBtn.click();
            });
        });
        
        editWorkModal.style.display = 'flex';
    });
    
    saveWorkEdit.addEventListener('click', () => {
        if (!currentWork) return;
        
        const updatedWork = {
            ...currentWork,
            title: editWorkTitle.value,
            category: editWorkCategory.value,
            description: editWorkDescription.value,
            images: [...currentWork.images],
            audios: [...currentWork.audios]
        };
        
        const imageFiles = editWorkImages.files;
        const audioFiles = editWorkAudios.files;
        
        if (imageFiles.length > 0) {
            // 处理新上传的图片，添加到现有图片中
            handleImageUploads(updatedWork, imageFiles, 0, audioFiles, true);
        } else if (audioFiles.length > 0) {
            // 处理新上传的音频，添加到现有音频中
            handleAudioUploads(updatedWork, audioFiles, 0, true);
        } else {
            // 没有新上传的媒体文件，直接保存
            updateWork(updatedWork);
        }
        
        editWorkModal.style.display = 'none';
    });
    
    cancelWorkEdit.addEventListener('click', () => {
        editWorkModal.style.display = 'none';
    });
    
    // 初始化时间轴编辑功能
    initTimelineEdit();
    
    // 初始化主题设置功能
    initThemeSettings();
}

// 初始化时间轴编辑功能
function initTimelineEdit() {
    editTimelineBtn.addEventListener('click', () => {
        renderTimelineEdit();
        editTimelineModal.style.display = 'flex';
    });
    
    addTimelineItem.addEventListener('click', () => {
        addNewTimelineItem();
    });
    
    saveTimeline.addEventListener('click', () => {
        saveTimelineData();
        editTimelineModal.style.display = 'none';
    });
    
    cancelTimeline.addEventListener('click', () => {
        editTimelineModal.style.display = 'none';
    });
}

// 渲染时间轴编辑界面
function renderTimelineEdit() {
    timelineItems.innerHTML = '';
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item-edit';
        timelineItem.innerHTML = `
            <input type="text" class="timeline-year" value="${item.year}" placeholder="年份">
            <input type="text" class="timeline-event" value="${item.event}" placeholder="事件">
            <button class="remove-timeline-item" data-index="${index}">删除</button>
        `;
        timelineItems.appendChild(timelineItem);
    });
    
    // 添加删除事件
    document.querySelectorAll('.remove-timeline-item').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            timelineData.splice(index, 1);
            renderTimelineEdit();
        });
    });
}

// 添加新的时间轴项目
function addNewTimelineItem() {
    const newItem = { year: '', event: '' };
    timelineData.push(newItem);
    renderTimelineEdit();
}

// 保存时间轴数据
function saveTimelineData() {
    const timelineInputs = document.querySelectorAll('.timeline-item-edit');
    const newTimelineData = [];
    
    timelineInputs.forEach(input => {
        const year = input.querySelector('.timeline-year').value;
        const event = input.querySelector('.timeline-event').value;
        if (year && event) {
            newTimelineData.push({ year, event });
        }
    });
    
    timelineData = newTimelineData;
    localStorage.setItem('timelineData', JSON.stringify(timelineData));
    initTimeline();
}

// 初始化主题设置功能
function initThemeSettings() {
    console.log('Initializing theme settings with:', themeData);
    
    themeSettingsBtn.addEventListener('click', () => {
        loadThemeSettings();
        themeSettingsModal.style.display = 'flex';
    });
    
    backgroundType.addEventListener('change', () => {
        toggleBackgroundOptions();
    });
    
    addEmoji.addEventListener('click', () => {
        addEmojiToTheme();
    });
    
    saveTheme.addEventListener('click', () => {
        saveThemeSettings();
        themeSettingsModal.style.display = 'none';
    });
    
    cancelTheme.addEventListener('click', () => {
        themeSettingsModal.style.display = 'none';
    });
    
    // 初始化主题
    applyTheme();
}

// 加载主题设置
function loadThemeSettings() {
    backgroundType.value = themeData.backgroundType;
    backgroundColor.value = themeData.backgroundColor;
    gradientColor1.value = themeData.gradientColor1;
    gradientColor2.value = themeData.gradientColor2;
    emojiEffect.value = themeData.emojiEffect || 'none';
    emojiInput.value = '';
    toggleBackgroundOptions();
}

// 切换背景选项
function toggleBackgroundOptions() {
    const type = backgroundType.value;
    colorOption.style.display = type === 'color' ? 'block' : 'none';
    gradientOption.style.display = type === 'gradient' ? 'block' : 'none';
    imageOption.style.display = type === 'image' ? 'block' : 'none';
}

// 添加Emoji到主题
function addEmojiToTheme() {
    const emoji = emojiInput.value.trim();
    if (emoji) {
        themeData.emojis.push(emoji);
        emojiInput.value = '';
        alert('Emoji已添加！');
        // 应用emoji效果
        applyEmojiEffect();
    }
}

// 保存主题设置
function saveThemeSettings() {
    // 直接从DOM获取最新值
    const newThemeData = {
        backgroundType: document.getElementById('backgroundType').value,
        backgroundColor: document.getElementById('backgroundColor').value,
        gradientColor1: document.getElementById('gradientColor1').value,
        gradientColor2: document.getElementById('gradientColor2').value,
        emojiEffect: document.getElementById('emojiEffect').value,
        emojis: themeData.emojis,
        backgroundImage: themeData.backgroundImage
    };
    
    console.log('Saving theme settings:', newThemeData);
    
    // 处理背景图片
    const imageFile = document.getElementById('backgroundImage').files[0];
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            newThemeData.backgroundImage = e.target.result;
            themeData = newThemeData;
            localStorage.setItem('themeData', JSON.stringify(themeData));
            console.log('Theme saved with image');
            applyTheme();
        };
        reader.readAsDataURL(imageFile);
    } else {
        themeData = newThemeData;
        localStorage.setItem('themeData', JSON.stringify(themeData));
        console.log('Theme saved without image');
        applyTheme();
    }
}

// 应用主题
function applyTheme() {
    const body = document.body;
    console.log('Applying theme:', themeData);
    
    // 重置所有背景相关样式
    body.style.backgroundColor = '';
    body.style.backgroundImage = '';
    body.style.backgroundSize = '';
    body.style.backgroundPosition = '';
    body.style.backgroundRepeat = 'no-repeat';
    
    // 确保body元素占据整个视口
    body.style.minHeight = '100vh';
    
    switch (themeData.backgroundType) {
        case 'color':
            console.log('Applying color background:', themeData.backgroundColor);
            body.style.backgroundColor = themeData.backgroundColor;
            body.style.backgroundImage = 'none';
            break;
        case 'gradient':
            console.log('Applying gradient background:', themeData.gradientColor1, themeData.gradientColor2);
            body.style.backgroundImage = `linear-gradient(135deg, ${themeData.gradientColor1}, ${themeData.gradientColor2})`;
            body.style.backgroundColor = 'transparent';
            // 确保渐变覆盖整个视口
            body.style.backgroundSize = '100% 100%';
            break;
        case 'image':
            if (themeData.backgroundImage) {
                console.log('Applying image background');
                body.style.backgroundImage = `url(${themeData.backgroundImage})`;
                body.style.backgroundSize = 'cover';
                body.style.backgroundPosition = 'center';
                body.style.backgroundColor = 'transparent';
            }
            break;
    }
    
    // 应用emoji效果
    applyEmojiEffect();
    
    // 强制重绘
    body.offsetHeight;
}

// 应用emoji效果
function applyEmojiEffect() {
    // 清除现有的emoji元素
    document.querySelectorAll('.emoji-element').forEach(el => el.remove());
    
    if (themeData.emojis.length === 0 || themeData.emojiEffect === 'none') {
        return;
    }
    
    const body = document.body;
    
    switch (themeData.emojiEffect) {
        case 'scatter':
            // 散布效果
            for (let i = 0; i < 20; i++) {
                const emoji = document.createElement('div');
                emoji.className = 'emoji-element';
                emoji.textContent = themeData.emojis[Math.floor(Math.random() * themeData.emojis.length)];
                emoji.style.position = 'fixed';
                emoji.style.left = `${Math.random() * 100}%`;
                emoji.style.top = `${Math.random() * 100}%`;
                emoji.style.fontSize = `${Math.random() * 20 + 16}px`;
                emoji.style.opacity = Math.random() * 0.8 + 0.2;
                emoji.style.zIndex = '1';
                body.appendChild(emoji);
            }
            break;
        case 'fill':
            // 填充效果
            const fillEmoji = document.createElement('div');
            fillEmoji.className = 'emoji-element';
            fillEmoji.textContent = themeData.emojis.join(' ');
            fillEmoji.style.position = 'fixed';
            fillEmoji.style.left = '0';
            fillEmoji.style.top = '0';
            fillEmoji.style.width = '100%';
            fillEmoji.style.height = '100%';
            fillEmoji.style.fontSize = '30px';
            fillEmoji.style.opacity = '0.1';
            fillEmoji.style.zIndex = '1';
            fillEmoji.style.pointerEvents = 'none';
            body.appendChild(fillEmoji);
            break;
        case 'rain':
            // 下雨效果
            for (let i = 0; i < 10; i++) {
                createRainEmoji(body);
            }
            break;
        case 'float':
            // 漂浮效果
            for (let i = 0; i < 15; i++) {
                createFloatEmoji(body);
            }
            break;
    }
}

// 创建下雨效果的emoji
function createRainEmoji(body) {
    const emoji = document.createElement('div');
    emoji.className = 'emoji-element';
    emoji.textContent = themeData.emojis[Math.floor(Math.random() * themeData.emojis.length)];
    emoji.style.position = 'fixed';
    emoji.style.left = `${Math.random() * 100}%`;
    emoji.style.top = '-50px';
    emoji.style.fontSize = `${Math.random() * 20 + 16}px`;
    emoji.style.zIndex = '1';
    emoji.style.animation = `rain ${Math.random() * 3 + 2}s linear infinite`;
    body.appendChild(emoji);
}

// 创建漂浮效果的emoji
function createFloatEmoji(body) {
    const emoji = document.createElement('div');
    emoji.className = 'emoji-element';
    emoji.textContent = themeData.emojis[Math.floor(Math.random() * themeData.emojis.length)];
    emoji.style.position = 'fixed';
    emoji.style.left = `${Math.random() * 100}%`;
    emoji.style.top = `${Math.random() * 100}%`;
    emoji.style.fontSize = `${Math.random() * 20 + 16}px`;
    emoji.style.zIndex = '1';
    emoji.style.animation = `float ${Math.random() * 5 + 3}s ease-in-out infinite`;
    body.appendChild(emoji);
}

// 初始化页面
function init() {
    initLogin();
    initTags();
    initTextEdit();
    initWorksManagement();
    initWorkEdit();
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', init);
