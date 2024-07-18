"use strict";(self.webpackChunkstar_academy=self.webpackChunkstar_academy||[]).push([[4101],{5112:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(4848),i=s(8453);const r={title:"C#",description:""},o=void 0,a={id:"software-engineering/phase01-c-sharp",title:"C#",description:"",source:"@site/docs/software-engineering/phase01-c-sharp.md",sourceDirName:"software-engineering",slug:"/software-engineering/phase01-c-sharp",permalink:"/codestar-documents/docs/software-engineering/phase01-c-sharp",draft:!1,unlisted:!1,editUrl:"https://github.com/Star-Academy/codestar-documents/tree/master/docs/software-engineering/phase01-c-sharp.md",tags:[],version:"current",frontMatter:{title:"C#",description:""},sidebar:"tutorialSidebar",previous:{title:"\u0645\u0647\u0646\u062f\u0633\u06cc \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631",permalink:"/codestar-documents/docs/software-engineering"},next:{title:"Full-Text Search",permalink:"/codestar-documents/docs/software-engineering/phase02-full-text-search-project"}},c={},l=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"\u0646\u0635\u0628 \u067e\u06cc\u0634\u200c\u0646\u06cc\u0627\u0632\u0647\u0627",id:"\u0646\u0635\u0628-\u067e\u06cc\u0634\u0646\u06cc\u0627\u0632\u0647\u0627",level:2},{value:"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0645\u0628\u0627\u0646\u06cc \u0632\u0628\u0627\u0646 #C",id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u0627-\u0645\u0628\u0627\u0646\u06cc-\u0632\u0628\u0627\u0646-c",level:2},{value:"\u0627\u0648\u0644\u06cc\u0646 \u0628\u0631\u0646\u0627\u0645\u0647",id:"\u0627\u0648\u0644\u06cc\u0646-\u0628\u0631\u0646\u0627\u0645\u0647",level:2},{value:"NuGet",id:"nuget",level:2},{value:"\u06a9\u0645\u06cc \u067e\u06cc\u0634\u0631\u0641\u062a\u0647\u200c\u062a\u0631",id:"\u06a9\u0645\u06cc-\u067e\u06cc\u0634\u0631\u0641\u062a\u0647\u062a\u0631",level:2},{value:"\u0646\u0627\u0645\u200c\u06af\u0630\u0627\u0631\u06cc\u200c\u0647\u0627 \u062f\u0631 #C",id:"\u0646\u0627\u0645\u06af\u0630\u0627\u0631\u06cc\u0647\u0627-\u062f\u0631-c",level:3},{value:"C# Interactive",id:"c-interactive",level:3},{value:"Lambda Expressions",id:"lambda-expressions",level:3},{value:"Extension Method",id:"extension-method",level:3},{value:"LINQ",id:"linq",level:3},{value:"\u067e\u0631\u0648\u0698\u0647",id:"\u067e\u0631\u0648\u0698\u0647",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u0645\u0642\u062f\u0645\u0647",children:"\u0645\u0642\u062f\u0645\u0647"}),"\n",(0,t.jsx)(e.p,{children:"\u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u0632 \u0628\u0627 \u0632\u0628\u0627\u0646\n#C\n\u0622\u0634\u0646\u0627 \u200c\u0645\u06cc\u200c\u0634\u0648\u06cc\u062f. \u0647\u0645\u0686\u0646\u06cc\u0646 \u0686\u0646\u062f \u0628\u0631\u0646\u0627\u0645\u06c0 \u0633\u0627\u062f\u0647 \u0628\u0627 \u0627\u06cc\u0646 \u0632\u0628\u0627\u0646 \u0645\u06cc\u200c\u0646\u0648\u06cc\u0633\u06cc\u062f."}),"\n",(0,t.jsx)(e.h2,{id:"\u0646\u0635\u0628-\u067e\u06cc\u0634\u0646\u06cc\u0627\u0632\u0647\u0627",children:"\u0646\u0635\u0628 \u067e\u06cc\u0634\u200c\u0646\u06cc\u0627\u0632\u0647\u0627"}),"\n",(0,t.jsxs)(e.p,{children:["\u062f\u0631 \u0642\u062f\u0645 \u0627\u0648\u0644 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631 \u0628\u0627 \u0632\u0628\u0627\u0646\n#C\n\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645 \u0627\u0632 ",(0,t.jsx)(e.a,{href:"https://code.visualstudio.com/",children:"VS Code"}),"\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f \u062a\u0627 \u0628\u0627 ",(0,t.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/dotnet/core/tools/",children:"Net CLI."}),"\n\u0628\u0647\u062a\u0631 \u0622\u0634\u0646\u0627 \u0634\u0648\u06cc\u062f.\n\u0628\u0631\u0627\u06cc \u0646\u0648\u0634\u062a\u0646 \u06a9\u062f \u0628\u0647 \u0632\u0628\u0627\u0646\n#C\n\u062f\u0631 VS Code"]}),"\n",(0,t.jsx)(e.p,{children:"\u0645\u0631\u0627\u062d\u0644 \u0632\u06cc\u0631 \u0631\u0627 \u0637\u06cc \u06a9\u0646\u06cc\u062f:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\u0646\u0635\u0628 ",(0,t.jsx)(e.a,{href:"https://dotnet.microsoft.com/en-us/download",children:"NET SDK"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["\u0646\u0635\u0628 ",(0,t.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp",children:"\u0627\u06a9\u0633\u062a\u0646\u0634\u0646 #C"})]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u067e\u0633 \u0627\u0632 \u0646\u0635\u0628 \u0645\u0648\u0627\u0631\u062f \u0628\u0627\u0644\u0627 \u062f\u0633\u062a\u0648\u0631\n",(0,t.jsx)(e.code,{children:"dotnet --info"}),"\n\u0631\u0627 \u062f\u0631 \u062a\u0631\u0645\u06cc\u0646\u0627\u0644 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f \u062a\u0627 \u0646\u0633\u062e\u0647\u200c\u0647\u0627\u06cc\nNet.\n\u0646\u0635\u0628 \u0634\u062f\u0647 \u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0646\u06cc\u062f."]}),"\n",(0,t.jsx)(e.admonition,{title:"\u200c",type:"tip",children:(0,t.jsxs)(e.p,{children:["\u0628\u0631\u0627\u06cc \u06a9\u0627\u0631 \u0628\u0627 \u062a\u0631\u0645\u06cc\u0646\u0627\u0644 \u0646\u0633\u062e\u0647 \u062c\u062f\u06cc\u062f ",(0,t.jsx)(e.a,{href:"https://github.com/microsoft/terminal/releases",children:"\u062a\u0631\u0645\u06cc\u0646\u0627\u0644 \u0648\u06cc\u0646\u062f\u0648\u0632"}),"\n\u0631\u0627 \u0646\u06cc\u0632 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f."]})}),"\n",(0,t.jsx)(e.h2,{id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u0627-\u0645\u0628\u0627\u0646\u06cc-\u0632\u0628\u0627\u0646-c",children:"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0645\u0628\u0627\u0646\u06cc \u0632\u0628\u0627\u0646 #C"}),"\n",(0,t.jsxs)(e.p,{children:["\u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u0627\u0628\u062a\u062f\u0627 \u0628\u0627\nSolution\n\u0648\nProject\n\u062f\u0631 \u0632\u0628\u0627\u0646\n#C\n\u0622\u0634\u0646\u0627 \u0634\u0648\u06cc\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u062f\u0631\u06a9 \u0627\u06cc\u0646 \u0645\u0641\u0627\u0647\u06cc\u0645\n",(0,t.jsx)(e.a,{href:"https://stackoverflow.com/a/40400159/7498797",children:"?What is a C# solution and how to use it"}),"\n\u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f\u061b \u0633\u067e\u0633 \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0628\u0627 \u0632\u0628\u0627\u0646\nJava\n\u0622\u0634\u0646\u0627\u06cc\u06cc \u062f\u0627\u0631\u06cc\u062f\n",(0,t.jsx)(e.a,{href:"https://nerdparadise.com/programming/csharpforjavadevs",children:"C# Crash Course for Java Developers"}),"\n\u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u0628\u0641\u0631\u0645\u0627\u06cc\u06cc\u062f. \u062f\u0631 \u063a\u06cc\u0631 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u0627\u0632\n",(0,t.jsx)(e.a,{href:"https://www.w3schools.com/cs/index.php",children:"w3schools"}),"\n\u062c\u0647\u062a \u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc \u0645\u0628\u0627\u0646\u06cc\n#C\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u200c\u06a9\u0646\u06cc\u062f."]}),"\n",(0,t.jsx)(e.h2,{id:"\u0627\u0648\u0644\u06cc\u0646-\u0628\u0631\u0646\u0627\u0645\u0647",children:"\u0627\u0648\u0644\u06cc\u0646 \u0628\u0631\u0646\u0627\u0645\u0647"}),"\n",(0,t.jsx)(e.p,{children:"\u0627\u0628\u062a\u062f\u0627 VS Code\n\u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646\u06cc\u062f \u0648 \u06cc\u06a9 \u067e\u0648\u0634\u0647 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f. \u0633\u067e\u0633 \u062f\u0631 \u062a\u0631\u0645\u06cc\u0646\u0627\u0644\u060c \u0628\u0631\u0627\u06cc \u0627\u06cc\u062c\u0627\u062f \u06cc\u06a9 Console App\n\u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0631\u0627 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"dotnet new console\n"})}),"\n",(0,t.jsx)(e.admonition,{title:"\u200c",type:"tip",children:(0,t.jsxs)(e.p,{children:["\u0628\u0631\u0627\u06cc \u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u062a\u0631\u0645\u06cc\u0646\u0627\u0644 \u062f\u0631 \u0645\u062d\u06cc\u0637\nVS Code\n\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0645\u06cc\u0627\u0646\u0628\u0631\n",(0,t.jsx)(e.code,{children:"ctrl + ` (backtick)"}),"\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."]})}),"\n",(0,t.jsxs)(e.p,{children:["\u067e\u0633 \u0627\u0632 \u0627\u062c\u0631\u0627\u06cc \u062f\u0633\u062a\u0648\u0631 \u0628\u0627\u0644\u0627 \u0686\u0646\u062f \u0641\u0627\u06cc\u0644 \u0648 \u06cc\u06a9 \u067e\u0648\u0634\u0647 \u0633\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f. \u0627\u06af\u0631 \u0641\u0627\u06cc\u0644\n",(0,t.jsx)(e.code,{children:"Program.cs"}),"\n\u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646\u06cc\u062f\u060c \u0645\u0634\u0627\u0647\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f \u06a9\u0647 \u06cc\u06a9 \u06a9\u062f \u0633\u0627\u062f\u0647\u200c\u06cc \u0686\u0627\u067e\n",(0,t.jsx)(e.code,{children:"Hello world"}),"\n\u062f\u0631 \u0622\u0646 \u0646\u0648\u0634\u062a\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a. \u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 \u0628\u0631\u0646\u0627\u0645\u0647 \u062f\u0631\u0648\u0646 \u062a\u0631\u0645\u06cc\u0646\u0627\u0644 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0631\u0627 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"dotnet run\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u0628\u0627 \u0627\u062c\u0631\u0627\u06cc \u062f\u0633\u062a\u0648\u0631 \u0628\u0627\u0644\u0627 \u0628\u0627\u06cc\u062f \u0639\u0628\u0627\u0631\u062a \u0632\u06cc\u0631 \u062f\u0631 \u062a\u0631\u0645\u06cc\u0646\u0627\u0644 \u0686\u0627\u067e \u0634\u0648\u062f:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"Hello World\n"})}),"\n",(0,t.jsx)(e.h2,{id:"nuget",children:"NuGet"}),"\n",(0,t.jsx)(e.p,{children:"\u062a\u0648\u0633\u0639\u0647\u200c\u062f\u0647\u0646\u062f\u06af\u0627\u0646 \u0628\u0631\u0627\u06cc \u0627\u0634\u062a\u0631\u0627\u06a9 \u06af\u0630\u0627\u0634\u062a\u0646 \u0648 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u062f\u0647\u0627\u06cc \u0628\u0647 \u0627\u0634\u062a\u0631\u0627\u06a9 \u06af\u0630\u0627\u0634\u062a\u0647 \u0634\u062f\u0647 \u0627\u0632 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06cc\u06cc \u062a\u062d\u062a \u0639\u0646\u0648\u0627\u0646\nPackage Manager\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u200c\u06a9\u0646\u0646\u062f. \u062f\u0631 \u067e\u0644\u062a\u0641\u0631\u0645\nNet.\n\u0627\u0632\nNuGet\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u200c\u0645\u06cc\u200c\u0634\u0648\u062f.\nNuGet\n\u06a9\u062f\u0647\u0627 \u0631\u0627 \u062f\u0631 \u0642\u0627\u0644\u0628 \u0641\u0627\u06cc\u0644\u200c\u0647\u0627\u06cc\u06cc\n(Package\u0647\u0627\u06cc\u06cc)\n\u0628\u0627 \u067e\u0633\u0648\u0646\u062f\nnupkg.\n\u0646\u06af\u0647\u200c\u062f\u0627\u0631\u06cc \u0645\u06cc\u200c\u06a9\u0646\u062f. \u0627\u06cc\u0646 \u0641\u0627\u06cc\u0644 \u06cc\u06a9 \u0641\u0627\u06cc\u0644\nzip\n\u062d\u0627\u0648\u06cc \u06a9\u062f\u0647\u0627\u06cc \u06a9\u0627\u0645\u067e\u0627\u06cc\u0644 \u0634\u062f\u0647\n(dll)\u060c\n\u0641\u0627\u06cc\u0644\u200c\u0647\u0627\u06cc \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632\nPackage\n\u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062a\nPackage\n\u0645\u06cc\u200c\u0628\u0627\u0634\u062f. \u0627\u06cc\u0646 \u0627\u0628\u0632\u0627\u0631\u060c \u0645\u06a9\u0627\u0646\u06cc\u0632\u0645\u200c\u0647\u0627\u06cc\u06cc \u0628\u0631\u0627\u06cc \u0627\u06cc\u062c\u0627\u062f\u060c \u0646\u06af\u0647\u062f\u0627\u0631\u06cc \u0648 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u062f\u0647\u0627 \u0627\u0631\u0627\u0626\u0647 \u0645\u06cc\u200c\u062f\u0647\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0647\u0631\u06a9\u062f\u0627\u0645 \u0627\u0632 \u0627\u06cc\u0646 \u0645\u06a9\u0627\u0646\u06cc\u0632\u0645\u200c\u0647\u0627\n\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06cc\u06cc \u0646\u06cc\u0632 \u0641\u0631\u0627\u0647\u0645 \u06a9\u0631\u062f\u0647 \u0627\u0633\u062a. \u0647\u0646\u06af\u0627\u0645 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632\nNuGet\n\u062a\u0648\u0633\u0639\u0647\u200c\u062f\u0647\u0646\u062f\u0647 \u0646\u06af\u0631\u0627\u0646 \u062f\u0631\u06cc\u0627\u0641\u062a \u0648 \u0627\u0634\u062a\u0631\u0627\u06a9 \u06a9\u062f\u0647\u0627 \u0646\u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u0686\u0631\u0627 \u06a9\u0647 \u062e\u0648\u062f\nNuGet\n\u0627\u06cc\u0646 \u0639\u0645\u0644\u06cc\u0627\u062a\u200c\u0647\u0627 \u0631\u0627 \u0645\u062f\u06cc\u0631\u06cc\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f."}),"\n",(0,t.jsxs)(e.p,{children:["\u067e\u06a9\u06cc\u062c\n",(0,t.jsx)(e.code,{children:"System.Text.Json"}),"\n\u0627\u0645\u06a9\u0627\u0646 \u062a\u0628\u062f\u06cc\u0644 \u0627\u0634\u06cc\u0627\u0621 \u0632\u0628\u0627\u0646\n#C\n\u0628\u0647\nJson\n\u0648 \u0628\u0631\u0639\u06a9\u0633 \u0631\u0627 \u0641\u0631\u0627\u0647\u0645 \u0645\u06cc\u200c\u06a9\u0646\u062f. \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0627\u06cc\u0646 \u067e\u06a9\u06cc\u062c \u0631\u0627 \u0628\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"dotnet add package System.Text.Json\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u06a9\u062f \u0632\u06cc\u0631 \u06cc\u06a9 \u0634\u06cc\u0621\n#C\n\u0631\u0627 \u0628\u0647\nJson\n\u062a\u0628\u062f\u06cc\u0644 \u06a9\u0631\u062f\u0647 \u0648 \u062f\u0631 \u062e\u0631\u0648\u062c\u06cc \u0686\u0627\u067e \u0645\u06cc\u200c\u06a9\u0646\u062f:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-csharp",children:'using System;\nusing System.Text.Json;\n\nnamespace HelloWorld\n{\n    public class Person\n    {\n        public string FirstName {get; set;}\n        public string LastName {get; set;}\n    }\n\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            var item = new Person() { FirstName = "Foo", LastName = "Bar"};\n            var serializedItem = JsonSerializer.Serialize(item);\n            Console.WriteLine(serializedItem);\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u062f\u0631\n#C\n\u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647\u200c\u0647\u0627 \u0628\u0627\u06cc\u062f \u0628\u0627 \u06a9\u0644\u06cc\u062f\u0648\u0627\u0698\u06c0\nusing\n\u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 \u0631\u0627 \u0628\u0647 \u06a9\u062f \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f. \u06a9\u0627\u0631\u0627\u06cc\u06cc\nusing\n\u0645\u0634\u0627\u0628\u0647 \u0628\u0627\nimport\n\u0648\ninclude\n\u062f\u0631 \u0632\u0628\u0627\u0646\u200c\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."}),"\n",(0,t.jsx)(e.p,{children:"\u0647\u0645\u0686\u0646\u06cc\u0646 \u0628\u0631\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0645\u062a\u063a\u06cc\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u06a9\u0644\u06cc\u062f\u0648\u0627\u0698\u06c0\nvar\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f. \u062f\u0631 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u06a9\u0627\u0645\u067e\u0627\u06cc\u0644\u0631 \u0627\u0632 \u0631\u0648\u06cc \u0645\u0642\u062f\u0627\u0631 \u0627\u0648\u0644\u06cc\u0647\u060c \u0646\u0648\u0639 \u0645\u062a\u063a\u06cc\u0631 \u0631\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u062f."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-csharp",children:'var i = 0;\n// i is int\nvar s = "hi";\n// s is string\nvar f = 1.5;\nf = "hello";\n// compile error\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u0627\u06af\u0631 \u062f\u0648\u0633\u062a \u062f\u0627\u0631\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u062f\u0631 \u0645\u0648\u0631\u062f\nNuGet\n\u0628\u062f\u0627\u0646\u06cc\u062f \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0645\u0642\u0627\u0644\u0647\n",(0,t.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/nuget/what-is-nuget",children:"An introduction to NuGet"}),"\n\u0631\u0627 \u0628\u062e\u0648\u0627\u0646\u06cc\u062f."]}),"\n",(0,t.jsx)(e.h2,{id:"\u06a9\u0645\u06cc-\u067e\u06cc\u0634\u0631\u0641\u062a\u0647\u062a\u0631",children:"\u06a9\u0645\u06cc \u067e\u06cc\u0634\u0631\u0641\u062a\u0647\u200c\u062a\u0631"}),"\n",(0,t.jsxs)(e.p,{children:["\u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u06cc\u0627\u062f \u0645\u06cc\u200c\u06af\u06cc\u0631\u06cc\u062f \u0686\u06af\u0648\u0646\u0647 \u0628\u0627 \u06a9\u0646\u0633\u0648\u0644 \u06a9\u0627\u0631 \u06a9\u0646\u06cc\u062f.\n\u0627\u0628\u062a\u062f\u0627 \u0633\u0631\u06cc \u0628\u0647 \u0627\u06cc\u0646\n",(0,t.jsx)(e.a,{href:"https://softchris.github.io/pages/dotnet-core.html#creating-a-solution",children:"\u0622\u0645\u0648\u0632\u0634"}),"\n\u0628\u0632\u0646\u06cc\u062f \u0648 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f \u062a\u0645\u0627\u0645 \u06a9\u0627\u0631\u0647\u0627\u06cc \u06af\u0641\u062a\u0647 \u0634\u062f\u0647 \u0631\u0627 \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u062f. \u0633\u067e\u0633 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0631\u062d\u0633\u0628 \u0646\u06cc\u0627\u0632 \u0627\u0632 \u0622\u0645\u0648\u0632\u0634\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0646\u06cc\u0632 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://www.geeksforgeeks.org/console-readline-method-in-c-sharp/#:~:text=Console.-,ReadLine()%20Method%20in%20C%23,user%20presses%20the%20Enter%20key.",children:"Console.ReadLine() Method"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://www.geeksforgeeks.org/console-class-in-c-sharp/#:~:text=Weekday%20in%20C%23-,Console%20Class%20in%20C%23,output%20from%20the%20computer%20end.",children:"Console Class"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://softchris.github.io/pages/dotnet-10-commands.html#_4-dotnet-run",children:"10 commands you don't want to be without in .Net Core"})}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"\u0646\u0627\u0645\u06af\u0630\u0627\u0631\u06cc\u0647\u0627-\u062f\u0631-c",children:"\u0646\u0627\u0645\u200c\u06af\u0630\u0627\u0631\u06cc\u200c\u0647\u0627 \u062f\u0631 #C"}),"\n",(0,t.jsx)(e.p,{children:"\u06cc\u06a9\u06cc \u0627\u0632 \u06af\u0627\u0645\u200c\u0647\u0627\u06cc \u0645\u0647\u0645 \u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc \u0647\u0631 \u0632\u0628\u0627\u0646 \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0646\u0648\u06cc\u0633\u06cc \u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc \u0627\u0635\u0648\u0644 \u0646\u0627\u0645\u200c\u06af\u0630\u0627\u0631\u06cc \u0622\u0646 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f. \u0634\u0627\u06cc\u062f \u0646\u0627\u0645\u200c\u06af\u0630\u0627\u0631\u06cc \u062f\u0631 \u0648\u0647\u0644\u0647 \u0627\u0648\u0644 \u0645\u0648\u0631\u062f \u0645\u0647\u0645\u06cc\n\u0628\u0647 \u0646\u0638\u0631 \u0646\u0631\u0633\u062f \u0627\u0645\u0627 \u0627\u06cc\u0646 \u0645\u0648\u0636\u0648\u0639 \u0627\u0632 \u062c\u0647\u062a\u06cc \u0627\u0647\u0645\u06cc\u062a \u062f\u0627\u0631\u062f \u06a9\u0647 \u0646\u0628\u0627\u06cc\u062f \u06a9\u062f \u0634\u0645\u0627 \u0646\u0633\u0628\u062a \u0628\u0647 \u06a9\u062f\u0647\u0627\u06cc \u062c\u0627\u0645\u0639\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06cc\u0633\u0627\u0646 \u0622\u0646 \u0632\u0628\u0627\u0646 \u062a\u0627\u0641\u062a\u0647 \u062c\u062f\u0627 \u0628\u0627\u0641\u062a\u0647\n\u0628\u0627\u0634\u062f. \u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0627\u06cc\u0646 \u0642\u0648\u0627\u0639\u062f \u0635\u0641\u062d\u0627\u062a \u0632\u06cc\u0631 \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/ktaranov/naming-convention/blob/master/C%23%20Coding%20Standards%20and%20Naming%20Conventions.md",children:"C# Coding Standards and Naming Conventions"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions#naming-conventions",children:"C# Naming conventions"})}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"c-interactive",children:"C# Interactive"}),"\n",(0,t.jsxs)(e.p,{children:["\u06af\u0627\u0647\u06cc \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u0645 \u062f\u0631 \u0645\u062d\u06cc\u0637\u06cc \u062a\u0639\u0627\u0645\u0644\u06cc \u0645\u0627\u0646\u0646\u062f \u0632\u0628\u0627\u0646\u200c\u0647\u0627\u06cc \u0645\u0641\u0633\u0631\u06cc (\u0645\u062b\u0644\njavascript \u060cpython\n\u06cc\u0627 ...) \u062f\u0633\u062a\u0648\u0631\u0627\u062a\u06cc \u0631\u0627 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u0645.\n#C\n\u0646\u06cc\u0632 \u0627\u06cc\u0646 \u0627\u0645\u06a9\u0627\u0646 \u0631\u0627 \u0628\u0627 \u0646\u0627\u0645\nNet Interactive.\n\u062f\u0631 \u0627\u062e\u062a\u06cc\u0627\u0631 \u0645\u0627 \u0642\u0631\u0627\u0631 \u062f\u0627\u062f\u0647 \u0627\u0633\u062a. \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u0627\u0628\u0632\u0627\u0631\n\u0627\u06a9\u0633\u062a\u0646\u0634\u0646\n",(0,t.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.dotnet-interactive-vscode",children:"Net Interactive."}),"\n\u0631\u0627 \u0628\u0631\u0627\u06cc\nVS Code\n\u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f. \u067e\u0633 \u0627\u0632 \u0646\u0635\u0628 \u0627\u06a9\u0633\u062a\u0646\u0634\u0646 \u062f\u0631 \u0645\u062d\u06cc\u0637\nNet Interactive.\n\u0627\u06cc\u0646 \u062f\u0633\u062a\u0648\u0631\u0627\u062a \u0631\u0627 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-csharp",children:"2 + 2\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-csharp",children:"System.IO.Directory.GetCurrentDirectory()\n"})}),"\n",(0,t.jsx)(e.h3,{id:"lambda-expressions",children:"Lambda Expressions"}),"\n",(0,t.jsx)(e.p,{children:"\u0639\u0628\u0627\u0631\u0627\u062a \u0644\u0627\u0645\u0628\u062f\u0627\n(Lambda expressions)\n\u0633\u0627\u062f\u0647 \u0634\u062f\u0647 \u0645\u062a\u062f\u0647\u0627\u06cc \u0628\u06cc\u200c\u0646\u0627\u0645\n(Anonymous Function)\n\u0647\u0633\u062a\u0646\u062f.\n\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0641\u0647\u0648\u0645 \u0628\u06cc\u0634\u062a\u0631 \u0622\u0634\u0646\u0627 \u0634\u0648\u06cc\u062f \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://www.geeksforgeeks.org/lambda-expressions-in-c-sharp/",children:"Lambda Expressions in C# (GeeksforGeeks)"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://www.c-sharpcorner.com/UploadFile/bd6c67/lambda-expressions-in-C-Sharp/",children:"Lambda Expressions in C# (C# Corner)"})}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{title:"\u200c",type:"info",children:(0,t.jsxs)(e.p,{children:["\u0627\u06cc\u0646 \u0627\u0645\u06a9\u0627\u0646 \u06cc\u06a9\n",(0,t.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Syntactic_sugar",children:"Syntactic sugar"}),"\n\u0645\u06cc\u200c\u0628\u0627\u0634\u062f."]})}),"\n",(0,t.jsx)(e.h3,{id:"extension-method",children:"Extension Method"}),"\n",(0,t.jsxs)(e.p,{children:["\u0628\u0631\u0627\u06cc \u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u0645\u062a\u062f \u0628\u0647 \u06a9\u0644\u0627\u0633\u200c\u0647\u0627\u06cc \u0645\u0648\u062c\u0648\u062f \u0628\u062f\u0648\u0646 \u062a\u063a\u06cc\u06cc\u0631 \u06a9\u0644\u0627\u0633 \u0627\u0635\u0644\u06cc\u060c \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0644\u0627\u0633 \u0641\u0631\u0632\u0646\u062f \u06cc\u0627 \u06a9\u0627\u0645\u067e\u0627\u06cc\u0644 \u0645\u062c\u062f\u062f \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647\u060c \u0627\u0632\nExtension\nMethod\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.\nExtension method\u0647\u0627\nstatic\n\u0647\u0633\u062a\u0646\u062f \u0648 \u062e\u0627\u0631\u062c \u0627\u0632 \u06a9\u0644\u0627\u0633 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u067e\u06cc\u0627\u062f\u0647 \u0633\u0627\u0632\u06cc \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u0627\u0645\u0627 \u0628\u0647 \u0646\u062d\u0648\u06cc \u0635\u062f\u0627 \u0632\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u06a9\u0647 \u06af\u0648\u06cc\u0627 \u0639\u0636\u0648\u06cc \u0627\u0632 \u0622\u0646 \u06a9\u0644\u0627\u0633 \u0645\u06cc\u200c\u0628\u0627\u0634\u0646\u062f.\n\u0645\u062b\u0644\u0627 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u0645 \u06cc\u06a9 \u0639\u0645\u0644\u06a9\u0631\u062f \u0628\u0631\u0627\u06cc \u06a9\u0644\u0627\u0633\nstring\n(\u0628\u0647 \u062f\u0644\u06cc\u0644\n",(0,t.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/sealed",children:"sealed"}),"\n\u0628\u0648\u062f\u0646 \u0642\u0627\u0628\u0644 \u0627\u0631\u062b\u200c\u0628\u0631\u06cc \u0646\u06cc\u0633\u062a) \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u06a9\u0646\u06cc\u0645 \u0628\u0647 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u062a\u0639\u062f\u0627\u062f \u06a9\u0644\u0645\u0627\u062a \u06cc\u06a9 \u0645\u062a\u0646 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0645\u0627 \u0634\u0645\u0627\u0631\u0634 \u06a9\u0646\u062f:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-csharp",children:"namespace ExtensionMethods\n{\n    public static class MyExtensions\n    {\n        public static int WordCount(string str)\n        {\n            return str.Split(new char[] { ' ', '.', '?' }, StringSplitOptions.RemoveEmptyEntries).Length;\n        }\n    }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u062f \u0628\u0627\u0644\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-csharp",children:"var s = \u201cHello Extension Methods\u201d;\nvar i = MyExtensions.WordCount(s);\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u062d\u0627\u0644 \u0627\u06af\u0631 \u0639\u0628\u0627\u0631\u062a ",(0,t.jsx)(e.code,{children:"public static int WordCount(string str)"}),"\n\u0631\u0627 \u0628\u0647 ",(0,t.jsx)(e.code,{children:"public static int WordCount(this string str)"}),"\n\u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u0645. \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u0645 \u0628\u0647 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u0627\u0632\nextension method\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-csharp",children:'var s = "Hello Extension Methods";\nvar i = s.WordCount();\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u0628\u0631\u0627\u06cc \u0645\u0637\u0627\u0644\u0639\u0647\u200c\u06cc \u0628\u06cc\u0634\u062a\u0631\n",(0,t.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods",children:"Extension Methods (C# Programming Guide)"}),"\n\u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f."]}),"\n",(0,t.jsx)(e.h3,{id:"linq",children:"LINQ"}),"\n",(0,t.jsx)(e.p,{children:"\u0648\u0627\u0698\u0647\nLINQ\n(\u062a\u0648\u062c\u0647 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f \u06a9\u0647 \u0622\u0646 \u0631\u0627\nLink\n\u062a\u0644\u0641\u0638 \u06a9\u0646\u06cc\u062f) \u0645\u062e\u0641\u0641 \u0639\u0628\u0627\u0631\u062a\nLanguage-Integrated Query\n\u0627\u0633\u062a.\nLINQ\n\u06cc\u06a9 \u0631\u0627\u0647 \u06cc\u06a9\u0633\u0627\u0646 \u0631\u0627 \u0628\u0631\u0627\u06cc\n\u0627\u062a\u0635\u0627\u0644 \u0628\u0631\u0642\u0631\u0627\u0631 \u06a9\u0631\u062f\u0646 \u0628\u0647 \u0647\u0631 \u062f\u0627\u062f\u0647\u200c\u0633\u0627\u062e\u062a\u0627\u0631 \u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f \u0641\u0631\u0627\u0647\u0645 \u0645\u06cc\u200c\u06a9\u0646\u062f.\n\u0628\u0631\u0627\u06cc \u062f\u0631\u06a9 \u0628\u0647\u062a\u0631 \u0648 \u062a\u0645\u0631\u06cc\u0646 \u0628\u06cc\u0634\u062a\u0631 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://www.c-sharpcorner.com/UploadFile/babu_2082/linq-operators-and-lambda-expression-syntax-examples/",children:"LINQ Operators and Lambda Expressions"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://www.tutlane.com/tutorial/linq/linq-lambda-expressions",children:"LINQ Lambda Expressions"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u067e\u0631\u0648\u0698\u0647",children:"\u067e\u0631\u0648\u0698\u0647"}),"\n",(0,t.jsxs)(e.p,{children:["\u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0627\u06cc \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f \u06a9\u0647 \u062f\u0648 \u0641\u0627\u06cc\u0644\n",(0,t.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(9511).A+"",children:"\u062f\u0627\u0646\u0634\u062c\u0648\u06cc\u0627\u0646"}),"\n\u0648\n",(0,t.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(2148).A+"",children:"\u0646\u0645\u0631\u0627\u062a"}),"\n\u0631\u0627 \u0628\u062e\u0648\u0627\u0646\u062f \u0648 \u0633\u067e\u0633 \u0646\u0627\u0645\u060c \u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc \u0648 \u0645\u0639\u062f\u0644 \u0633\u0647 \u062f\u0627\u0646\u0634\u062c\u0648\u06cc \u0627\u0648\u0644 \u0631\u0627 \u0686\u0627\u067e \u06a9\u0646\u062f."]}),"\n",(0,t.jsxs)(e.admonition,{title:"\u200c",type:"tip",children:[(0,t.jsxs)(e.p,{children:["\u0628\u0631\u0627\u06cc \u06a9\u0627\u0631 \u0628\u0627 \u0632\u0628\u0627\u0646\n#C\n\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f\nIDE\u0647\u0627\u06cc\n",(0,t.jsx)(e.a,{href:"https://visualstudio.microsoft.com/downloads/",children:"Visual Studio"}),"\n\u06cc\u0627\n",(0,t.jsx)(e.a,{href:"https://soft98.ir/software/programming/1016-rider.html",children:"Rider"}),"\n\u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f \u0648 \u0627\u0632 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a\u0634\u0627\u0646 \u0628\u0647\u0631\u0647\u200c\u0645\u0646\u062f \u0634\u0648\u06cc\u062f."]}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u0628\u0631\u0627\u06cc \u06a9\u0627\u0631 \u0631\u0648\u06cc \u067e\u0631\u0648\u0698\u0647\u200c\u0647\u0627 \u0627\u0632\nIDE\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u200c\u06a9\u0646\u06cc\u062f."})})]}),"\n",(0,t.jsxs)(e.admonition,{title:"\u200c",type:"tip",children:[(0,t.jsx)(e.p,{children:"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a \u062c\u062f\u06cc\u062f \u0632\u0628\u0627\u0646\n#C\n\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0648\u06cc\u062f\u0626\u0648\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0646\u06cc\u062f."}),(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://www.youtube.com/watch?v=FkY-cbkzPMU",children:"What's new in C#? Exciting new features in C# 9, 10 and 11!"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://www.youtube.com/watch?v=Gv2uBJzBAms",children:"Every New Feature Added in C# 12"})}),"\n"]})]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},9511:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/files/scores-76885bff66d5238dfd0661c6ac6d74fc.json"},2148:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/files/students-7e48b111d2450c4a8dc0ffe4fc912c36.json"},8453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>a});var t=s(6540);const i={},r=t.createContext(i);function o(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);