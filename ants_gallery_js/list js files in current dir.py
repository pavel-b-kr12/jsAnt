import os
for file in os.listdir("."):
    if file.endswith(".js"):
        #print(os.path.join(".", file))
        print('"'+file+'",')
#print("Press Enter to continue ...")
#input() 
